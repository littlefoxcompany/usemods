import { watch } from 'fs'
import { build } from './build.mjs'
import { processDocs } from './docs.ts'

const watcher = watch(import.meta.dir + '/src', { recursive: true }, (event, filename) => {
  if (filename.endsWith('.ts')) {
    console.log(`Detected ${event} in ${filename}`)
    build()
    processDocs()
  }
})

process.on('SIGINT', () => {
  console.log('Closing watcher...')
  watcher.close()
  process.exit(0)
})
