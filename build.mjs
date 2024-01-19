import dts from 'bun-plugin-dts'

export async function build() {
  return await Bun.build({
    entrypoints: ['./src/index.ts'],
    outdir: './dist',
    minify: {
      whitespace: true,
      identifiers: false,
      syntax: true
    },
    plugins: [dts()]
  }).then(() => console.log('Build complete'))
}

build()
