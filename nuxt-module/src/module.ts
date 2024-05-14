import { defineNuxtModule, createResolver, addPlugin, addImportsDir } from '@nuxt/kit'

export interface ModuleOptions {
  alias: [string, string][]
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'usemods',
    configKey: 'usemods'
  },
  // Default configuration options of the Nuxt module
  defaults: {
    alias: []
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    addImportsDir(resolve('./runtime/utils'))
    addPlugin(resolve('./runtime/plugin'))
  }
})
