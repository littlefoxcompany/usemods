import dts from 'bun-plugin-dts'
import { watch, mkdir, readFileSync, writeFileSync, copyFileSync } from 'fs'
import { join } from 'path'
import { processDocs } from './docs.ts'

async function build() {
  return await Bun.build({
    entrypoints: ['./src/index.ts'],
    outdir: './dist',
    target: 'browser',
    minify: {
      whitespace: true,
      identifiers: false,
      syntax: true
    },
    plugins: [dts()]
  }).then(() => console.log('Build complete'))
}

// Check for --watch flag and if it's not present, just build once
if (!process.argv.includes('--watch')) {
  await build()
  await copyBuildFileToNuxtModules()
  await processDocs()
  process.exit(0)
} else {
  console.log('Watching for changes...')
  const watcher = watch(import.meta.dir + '/src', { recursive: true }, async (event, filename) => {
    if (filename.endsWith('.ts')) {
      console.log(`Detected ${event} in ${filename}`)
      await build()
      await copyBuildFileToNuxtModules()
      await processDocs()
    }
  })

  process.on('SIGINT', () => {
    console.log('Closing watcher...')
    watcher.close()
    process.exit(0)
  })
}

async function copyBuildFileToNuxtModules() {
  mkdir('nuxt-module/src/runtime/utils', { recursive: true }, (err) => {
    if (err) throw err
  })

  const utils = readFileSync(join(process.cwd(), 'dist/index.js'), 'utf8')
  const utilsTypeDefinitions = readFileSync(join(process.cwd(), 'dist/index.d.ts'), 'utf8')

  writeFileSync(join(process.cwd(), 'nuxt-module/src/runtime/utils/index.js'), utils)
  writeFileSync(join(process.cwd(), 'nuxt-module/src/runtime/utils/index.d.ts'), utilsTypeDefinitions)
}
