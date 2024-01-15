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

    // Generate markdown files
    for (const tsFile of tsFiles) {
      const tsContent = await readFile(resolve(directoryPath, tsFile), 'utf-8')
      combinedTsFile += tsContent + '\n'
      await writeFile(join(contentDirectory, `${basename(tsFile, '.ts')}.md`), generateMarkdown(tsContent))
      console.log('Markdown documentation generated for:', tsFile)
    }

    // Write combined file
    await writeFile(join(outputDirectory, 'mods.ts'), combinedTsFile)
  } catch (error) {
    console.error('Error processing files:', error)
  }
}

function generateMarkdown(tsContent: string): string {
  const metadata = Object.fromEntries([...tsContent.matchAll(metadataPattern)].map((m) => [m[1], m[2]]))
  let markdownContent = ''

  if (metadata.title) markdownContent += `# ${metadata.title}\n\n`
  if (metadata.description) markdownContent += `${metadata.description}\n\n`

  const matches = [...tsContent.matchAll(functionPattern), ...tsContent.matchAll(subtitlePattern)]

  for (const match of matches) {
    if (match[0].startsWith('// <subtitle>')) {
      markdownContent += `## ${match[1].trim()}\n\n`
    } else {
      const name = (match[0].match(/export\s+function\s+([a-zA-Z0-9_]+)\s*\(/) || [])[1] || ''

      const jsDoc = /\/\*\*([\s\S]*?)\*\//.exec(match[0])?.[1].trim() || ''
      const description = jsDoc
        .split('\n')
        .map((line) => line.trim().replace(/\/?\*+/g, ''))
        .slice(0, 1)
        .join(' ')
        .trim()
      const example = (jsDoc.match(/@example\s+([^\r\n]*)/) || [])[1] || ''
      const returns = (jsDoc.match(/@returns?\s+([^\r\n]*)/) || [])[1] || ''

      if (name) markdownContent += `### ${name}\n\n`
      if (description) markdownContent += `${description}\n\n`
      if (example) markdownContent += '```js [js]\n' + example + '\n```\n\n'
      if (returns) markdownContent += `**Returns:** ${returns}\n\n`
    }
  }

  return markdownContent.replace(/\n\n\n/g, '\n\n')
}

processFiles()
