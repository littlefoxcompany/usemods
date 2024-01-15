import { readFile, writeFile, readdir } from 'fs/promises'
import { resolve, extname, basename, join } from 'path'

const directoryPath = resolve('./utils/')
const outputDirectory = resolve('./dist/')
const contentDirectory = resolve('./content/2.functions')

const functionPattern = /\/\*\*[\s\S]*?\*\/\s*(export\s+function\s+[a-zA-Z0-9_]+\([^)]*\)\s*:\s*[a-zA-Z]+\s*(?:{[\s\S]*?})?)?/gms
const metadataPattern = /\/\/\s+(title|description):\s+([^\r\n]*)/g
const subtitlePattern = /\/\/ <subtitle>(.+?)\/\/ <\/subtitle>/gs

async function processFiles() {
  try {
    const tsFiles = (await readdir(directoryPath)).filter((file) => extname(file) === '.ts')
    let combinedTsFile = ''

    for (const tsFile of tsFiles) {
      const tsContent = await readFile(resolve(directoryPath, tsFile), 'utf-8')
      combinedTsFile += tsContent + '\n'

      const markdownContent = generateMarkdown(tsContent)
      await writeFile(join(contentDirectory, `${basename(tsFile, '.ts')}.md`), markdownContent)
      console.log('Markdown documentation generated for:', tsFile)
    }

    await writeFile(join(outputDirectory, 'mods.ts'), combinedTsFile)
  } catch (error) {
    console.error('Error processing files:', error)
  }
}

function generateMarkdown(tsContent: string): string {
  const metadata = Object.fromEntries([...tsContent.matchAll(metadataPattern)].map((m) => [m[1], m[2]]))
  let markdownContent = `# ${metadata.title || ''}\n\n#### ${metadata.description || ''}\n\n`

  const matches = [...tsContent.matchAll(functionPattern), ...tsContent.matchAll(subtitlePattern)]
  matches.sort((a, b) => a.index! - b.index!)

  for (const match of matches) {
    if (match[0].startsWith('// <subtitle>')) {
      markdownContent += `## ${match[1].trim()}\n\n`
    } else {
      const [functionName] = /export function\s+([a-zA-Z0-9_]+)/.exec(match[0]) || ['']
      const jsDoc = /\/\*\*([\s\S]*?)\*\//.exec(match[0])?.[1].trim() || ''
      const description = jsDoc
        .split('\n')
        .map((line) => line.trim().replace(/\/?\*+/g, ''))
        .filter((line) => !line.startsWith('@'))
        .join(' ')
        .trim()
      const example = (jsDoc.match(/@example\s+([^\r\n]*)/) || [])[1] || ''

      markdownContent += `### ${functionName}\n${description}\n\n`
      if (example) markdownContent += '```js [js]\n' + example + '\n```\n\n'
    }
  }

  return markdownContent.replace(/\n\n\n/g, '\n\n')
}

processFiles()
