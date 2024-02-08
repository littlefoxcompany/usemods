import { readFile, writeFile, readdir, mkdir } from 'fs/promises'
import { resolve, extname, basename, join } from 'path'

// Define the directory path
const directoryPath = resolve('./src/')
const contentDirectory = resolve('./nuxt-module/docs/content/2.docs')

const functionPattern = /\/\*\*[\s\S]*?\*\/\s*(export\s+function\s+([a-zA-Z0-9_]+)\s*\((.*?)\)\s*:\s*([\w<>,\[\]\s]+(?:\{[\s\S]*?})?)?)/gms
const metadataPattern = /\/\/\s+(title|description):\s+([^\r\n]*)/g

export async function processDocs() {
  try {
    await mkdir(contentDirectory, { recursive: true }) // Create directory outside the loop
    const tsFiles = (await readdir(directoryPath)).filter((file) => extname(file) === '.ts' && file !== 'index.ts')
    const readPromises = tsFiles.map((tsFile) => readFile(resolve(directoryPath, tsFile), 'utf-8'))

    const filesContent = await Promise.all(readPromises) // Read files in parallel

    filesContent.forEach((tsContent, index) => {
      const markdownContent = generateMarkdown(tsContent)
      writeFile(join(contentDirectory, basename(tsFiles[index], '.ts') + '.md'), markdownContent)
    })
  } catch (error) {
    console.error('Error processing files:', error)
  }
}

function generateMarkdown(tsContent: string): string {
  const metadata = Object.fromEntries([...tsContent.matchAll(metadataPattern)].map((m) => [m[1], m[2]]))

  let markdownContent = ''

  // Create Frontmatter
  markdownContent += `---\n`
  markdownContent += `title: ${metadata.title}\n`
  markdownContent += `description: ${metadata.description}\n`
  markdownContent += `icon: ${metadata.icon}\n`
  markdownContent += `---\n\n`

  // Page Title Component
  markdownContent += `::page-title\n`
  markdownContent += `# ${metadata.title}\n`
  markdownContent += `${metadata.description}\n`
  markdownContent += `::\n\n`

  const functions = tsContent.matchAll(functionPattern)

  for (const match of functions) {
    const [fullMatch, decloration, name, params, returns] = match
    const jsDocPattern = /\/\*\*([\s\S]*?)\*\//
    const jsDocMatch = jsDocPattern.exec(fullMatch)
    const description = jsDocMatch
      ? jsDocMatch[1]
          .trim()
          .split('\n')
          .map((line) => line.trim().replace(/\/?\*+/g, ''))
          .map((line) => line.trimStart())
          .join(' ')
      : 'No description available'
    const component = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

    markdownContent += `::page-function{name="${name}" description="${description}" params="${params}" }\n`
    markdownContent += `:::${component}\n`
    markdownContent += `:::\n`
    markdownContent += `::\n\n`
  }

  return markdownContent
}

processDocs()
