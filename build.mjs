import dts from 'bun-plugin-dts'

export async function build() {
  return await Bun.build({
    entrypoints: ['./src/index.ts'],
    outdir: './dist',
    minify: true,
    plugins: [dts()]
  })
}

build()
