import { resolve, extname, basename, join } from 'path'
import { watch, readFileSync, readdirSync, writeFileSync, copyFileSync, unlinkSync } from 'fs'
import { argv } from 'process'

// Arguments
const args = argv.slice(2)

// Paths
const srcPath = resolve('src')
const nuxtModulePath = resolve('nuxt-module')
const nuxtWebPath = resolve('nuxt-web')

// Functions
const functionPattern = /\/\*\*[\s\S]*?\*\/\s*(export\s+function\s+([a-zA-Z0-9_]+)\s*\((.*?)\)\s*:\s*([\w<>,[\]\s]+(?:\{[\s\S]*?})?)?)/gms
const metadataPattern = /\s+(title|description|lead):\s+([^\r\n]*)/g
const jsdocPattern = /\/\*\*([\s\S]*?)\*\//g

// Files
const files = ['actions', 'formatters', 'modifiers', 'generators', 'numbers', 'data', 'validators', 'detections', 'devices', 'animations', 'goodies']

function generateMarkdown(file, name) {
  const content = readFileSync(file, 'utf8')
  const metadata = Object.fromEntries([...content.matchAll(metadataPattern)].map((match) => [match[1], match[2]]))

  // Copy file to Website
  copyFileSync(file, join(nuxtWebPath, 'utils', basename(file)))
  copyFileSync(file, join(nuxtModulePath, 'src/runtime/utils', basename(file)))

  let markdown = ''

  // Create Frontmatter
  markdown += '---\n'
  markdown += `id: ${basename(file, extname(file))}\n`
  markdown += `title: ${metadata.title}\n`
  markdown += `description: ${metadata.description}\n`
  markdown += `lead: ${metadata.lead}\n`
  markdown += '---\n'

  // Page Title
  markdown += '::page-title\n'
  markdown += `# ${metadata.title}\n`
  markdown += `${metadata.description}\n`
  markdown += '::\n\n'

  // Functions
  const functions = [...content.matchAll(functionPattern)]

  for (const match of functions) {
    const [full] = match.slice(0)
    const [, name, params] = match.slice(1)
    const jsdoc = full.match(jsdocPattern)[0]
    const description = jsdoc.replace(/\/\*\*|\*\/|\*/g, '').replace(/@\w+.*$/gm, '').trim()
    const info = (jsdoc.match(/@info\s+(.*)/) || [])[1]?.trim() || ''

    markdown += `::page-function{name="${name}" description="${description}" params="${params}" info="${info}" }\n`
    markdown += `:::${name}\n`
    markdown += ':::\n'
    markdown += '::\n\n'
  }

  writeFileSync(join(nuxtWebPath, 'content/2.docs', `${name}.md`), markdown)
}


// Generate Markdown for each File
function generateAll() {
  files.forEach((file, index) => generateMarkdown(join(srcPath, `${file}.ts`), `${index + 1}.${file}`))
  copyFileSync(join(srcPath, 'config.ts'), join(nuxtWebPath, 'utils', 'config.ts'))
  copyFileSync(join(srcPath, 'config.ts'), join(nuxtModulePath, 'src/runtime/utils', 'config.ts'))
}

// Run Once
async function clearAll() {
  const webFiles = readdirSync(join(nuxtWebPath, 'utils')).filter(file => file.endsWith('.ts'))
  const moduleFiles = readdirSync(join(nuxtModulePath, 'src/runtime/utils')).filter(file => file.endsWith('.ts'))
  const documentFiles = readdirSync(join(nuxtWebPath, 'content/2.docs')).filter(file => file.endsWith('.md'))

  for (const file of webFiles) {
    unlinkSync(join(nuxtWebPath, 'utils', file))
  }
  for (const file of moduleFiles) {
    unlinkSync(join(nuxtModulePath, 'src/runtime/utils', file))
  }
  for (const file of documentFiles) {
    const baseName = basename(file, extname(file))
    if (!files.includes(baseName)) {
      unlinkSync(join(nuxtWebPath, 'content/2.docs', file))
    }
  }
}

// Clear and Generate on State
clearAll()
generateAll()

// Watch for Changes
if (args.includes('--watch')) {
  watch(srcPath, { recursive: true }, async (event, filename) => {
    if (filename.endsWith('.ts')) {
      console.log(`Detected ${event} in ${filename}`)
      generateAll()
    }
  })
} else if (args.includes('--build')) {
  generateAll()
} else {
  console.log('No valid command provided. Use --watch or --build.')
}
