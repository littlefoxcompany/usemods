import dts from 'bun-plugin-dts'
import { watch } from 'fs'
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
  await processDocs()
  process.exit(0)
} else {
  console.log('Watching for changes...')
  const watcher = watch(import.meta.dir + '/src', { recursive: true }, async (event, filename) => {
    if (filename.endsWith('.ts')) {
      console.log(`Detected ${event} in ${filename}`)
      await build()
      await processDocs()
    }
  })

  process.on('SIGINT', () => {
    console.log('Closing watcher...')
    watcher.close()
    process.exit(0)
  })
}
