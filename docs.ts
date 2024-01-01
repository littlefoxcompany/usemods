import * as fs from 'fs'
import * as path from 'path'

// Define the directory path
const directoryPath = path.resolve('./utils/')

// Get a list of all files in the directory
const files = fs.readdirSync(directoryPath)

// Filter the list to only include .ts files
const tsFiles = files.filter((file) => path.extname(file) === '.ts')

tsFiles.forEach((tsFile) => {
  const tsFilePath = path.resolve(directoryPath, tsFile)
  const tsContent = fs.readFileSync(tsFilePath, 'utf-8')

  // Improved pattern to match function declarations with JSDoc comments
  const functionPattern = /\/\*\*[\s\S]*?\*\/\s*(export\s+function\s+[a-zA-Z0-9_]+\([^)]*\)\s*:\s*[a-zA-Z]+\s*{[\s\S]*?})/gm
  const subtitlePattern = /\/\/ <subtitle>[\s\S]*?\/\/ <\/subtitle>/gm

  const functions = (tsContent.match(functionPattern) || []).map((match) => ({ match, type: 'function' }))
  const subtitles = (tsContent.match(subtitlePattern) || []).map((match) => ({ match, type: 'subtitle' }))
  const allMatches = [...functions, ...subtitles]

  let markdownContent = ''

  const pageTitleMatch = tsContent.match(/\/\/\s+title:\s+([^\r\n]*)/)
  const pageDescriptionMatch = tsContent.match(/\/\/\s+description:\s+([^\r\n]*)/)

  if (pageTitleMatch) markdownContent += `# ${pageTitleMatch[1]}\n\n`
  if (pageDescriptionMatch) markdownContent += `#### ${pageDescriptionMatch[1]}\n\n`

  allMatches.forEach((item) => {
    if (item.type === 'subtitle') {
      const subtitleMatch = /\/\/ <subtitle>(.+?)\/\/ <\/subtitle>/s.exec(item.match)
      if (subtitleMatch) markdownContent += `## ${subtitleMatch[1].trim()}\n\n`
    } else {
      const functionNameMatch = /export function\s+([a-zA-Z0-9_]+)/.exec(item.match)
      const functionName = functionNameMatch ? functionNameMatch[1] : ''

      const jsDocCommentMatch = /\/\*\*([\s\S]*?)\*\//.exec(item.match)
      const jsDocComment = jsDocCommentMatch ? jsDocCommentMatch[1] : ''

      const description = jsDocComment
        .split('\n')
        .map((line) =>
          line
            .trim()
            .replace(/\/?\*+/g, '')
            .trim()
        )
        .filter((line) => !line.startsWith('@'))
        .join(' ')
        .replace(/\/$/, '')
        .trim()

      const example = (jsDocComment.match(/@example\s+([^\r\n]*)/) || [])[1] || ''
      const returns = (jsDocComment.match(/@returns\s+([^\r\n]*)/) || [])[1] || ''

      markdownContent += `### ${functionName}\n`
      markdownContent += `${description}\n\n`
      if (example) markdownContent += '```js\n' + example + '\n```\n\n'
      if (returns) markdownContent += '```html\n' + returns + '\n```\n\n'
    }
  })

  markdownContent = markdownContent.replace(/\n\n\n/g, '\n\n')

  const outputFilePath = path.resolve('./content/2.functions', `${path.basename(tsFile, '.ts')}.md`)
  fs.writeFileSync(outputFilePath, markdownContent)

  console.log('Markdown documentation generated for:', tsFile, 'at:', outputFilePath)
})
