import { watch } from 'fs'
import { build } from './build.mjs'

const watcher = watch(import.meta.dir + '/src', { recursive: true }, (event, filename) => {
  console.log(`Detected ${event} in ${filename}`)
  if (filename.endsWith('.ts')) {
    build()
  }
})

process.on('SIGINT', () => {
  console.log('Closing watcher...')
  watcher.close()

  process.exit(0)
})
