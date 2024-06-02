import { resolve, extname, basename, join } from 'path'
import { watch, promises as fsPromises } from 'fs'
import { argv } from 'process'
import { rollup } from 'rollup'
import typescript from 'rollup-plugin-typescript2'
import terser from '@rollup/plugin-terser'

const { readFile, writeFile, copyFile, readdir, unlink } = fsPromises

// Arguments
const args = argv.slice(2)

// Paths
const srcPath = resolve('src')
const nuxtWebPath = resolve('nuxt-web')

// Functions
const functionPattern = /\/\*\*[\s\S]*?\*\/\s*(export\s+function\s+([a-zA-Z0-9_]+)\s*\((.*?)\)\s*:\s*([\w<>,[\]\s]+(?:\{[\s\S]*?})?)?)/gms
const metadataPattern = /\s+(title|description|lead):\s+([^\r\n]*)/g
const jsdocPattern = /\/\*\*([\s\S]*?)\*\//g

// Files
const files = ['actions', 'formatters', 'modifiers', 'generators', 'numbers', 'data', 'validators', 'detections', 'devices', 'animations', 'goodies', 'tailwind']

async function generateMarkdown(file, name) {
  const content = await readFile(file, 'utf8')
  const metadata = Object.fromEntries([...content.matchAll(metadataPattern)].map((match) => [match[1], match[2]]))

  await copyFile(file, join(nuxtWebPath, 'utils', basename(file)))

  // If Tailwind stop herec
  // If you're reading this...it's a great first fix to contribute to the project.
  if (name === '12.tailwind') {
    return
  }

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

  await writeFile(join(nuxtWebPath, 'content/2.docs', `${name}.md`), markdown)
}

async function generateAll() {
  await Promise.all(files.map((file, index) => generateMarkdown(join(srcPath, `${file}.ts`), `${index + 1}.${file}`)))
  await copyFile(join(srcPath, 'config.ts'), join(nuxtWebPath, 'utils', 'config.ts'))
}

async function clearAll() {
  const [webFiles, documentFiles] = await Promise.all([
    readdir(join(nuxtWebPath, 'utils')),
    readdir(join(nuxtWebPath, 'content/2.docs'))
  ])

  await Promise.all([
    ...webFiles.filter(file => file.endsWith('.ts')).map(file => unlink(join(nuxtWebPath, 'utils', file))),
    ...documentFiles.filter(file => files.includes(basename(file, extname(file)))).map(file => unlink(join(nuxtWebPath, 'content/2.docs', file)))
  ])
}

// Clear and Generate on State
clearAll().then(generateAll)

// Watch for Changes
if (args.includes('--watch')) {
  watch(srcPath, { recursive: true }, async () => {
    await generateAll()
    console.log('Generated all files')
  })
} else if (args.includes('--bundle')) {
  generateBundle()
  console.log('Generated bundle')
} else if (args.includes('--build')) {
  generateAll()
  console.log('Generated all files')
} else {
  console.log('No valid command provided. Use --watch or --build.')
}

async function generateBundle() {
  const bundle = await rollup({
    input: './src/index.ts',
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        rollupCommonJSResolveHack: false,
        clean: true,
      })
    ]
  })

  await bundle.write({
    file: './dist/index.js',
    plugins: [terser()]
  })

  console.log('dist bundle created')
}