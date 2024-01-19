import { readFile, writeFile, readdir, mkdir } from 'fs/promises'
import { resolve, extname, basename, join } from 'path'

// Define the directory path
const directoryPath = resolve('./src/')
const contentDirectory = resolve('./nuxt-module/docs/content/2.docs')

const functionPattern = /\/\*\*[\s\S]*?\*\/\s*(export\s+function\s+[a-zA-Z0-9_]+\([^)]*\)\s*:\s*[a-zA-Z]+\s*(?:{[\s\S]*?})?)?/gms
const metadataPattern = /\/\/\s+(title|description):\s+([^\r\n]*)/g

async function processFiles() {
  try {
    const tsFiles = (await readdir(directoryPath)).filter((file) => extname(file) === '.ts' && file !== 'index.ts')

    let combinedTsFile = ''

    // Generate markdown files
    for (const tsFile of tsFiles) {
      const tsContent = await readFile(resolve(directoryPath, tsFile), 'utf-8')
      combinedTsFile += tsContent + '\n'

      await mkdir(contentDirectory, { recursive: true })
      await writeFile(join(contentDirectory, `${basename(tsFile, '.ts')}.md`), generateMarkdown(tsContent))

      console.log('Markdown documentation generated for:', tsFile)
    }
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
  if (metadata.title) markdownContent += `::pagetitle\n`
  if (metadata.title) markdownContent += `# ${metadata.title}\n`
  if (metadata.description) markdownContent += `${metadata.description}\n`
  if (metadata.title) markdownContent += `::\n\n`

  const functions = tsContent.matchAll(functionPattern)

  for (const match of functions) {
    const name = (match[0].match(/(?<=example )\w+/) || [])[0] || ''
    const jsDoc = /\/\*\*([\s\S]*?)\*\//.exec(match[0])?.[1].trim() || ''
    const description = jsDoc
      .split('\n')
      .map((line) => line.trim().replace(/\/?\*+/g, ''))
      .slice(0, 1)
      .join(' ')
      .trim()

    const example = (jsDoc.match(/@example\s+([^\r\n]*)/) || [])[1] || ''
    const componentName = name.replace(/(?:^|\.?)([A-Z])/g, (x, y) => '-' + y.toLowerCase()).replace(/^-/, '')

    if (name) markdownContent += `::pagefunction\n`
    if (name) markdownContent += `### ${name}\n`
    if (description) markdownContent += `${description}\n`
    if (example) markdownContent += '```js [js]\n' + example + '\n```\n'
    if (name) markdownContent += `:::${componentName}\n:::\n`
    if (name) markdownContent += `::\n\n`
  }

  return markdownContent
}

processFiles()
