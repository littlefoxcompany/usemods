import { defineNuxtModule, addPlugin, createResolver, addImports, addImportsSources } from '@nuxt/kit'
import * as utils from 'usemods'

// Module options TypeScript interface definition
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

    const aliasMap = new Map<string, string>(options.alias)

    const imports = []
    for (const name of Object.keys(utils)) {
      const alias = aliasMap.has(name) ? aliasMap.get(name!) : name
      imports.push({
        name,
        alias
      })
    }

    addImportsSources({
      from: 'usemods',
      imports
    })

    addPlugin(resolve('./runtime/plugin'))
  }
})
