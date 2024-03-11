import { defineNuxtModule, addPlugin, createResolver, addImports } from '@nuxt/kit'

import * as utils from '../../dist/index'

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

    for (const name of Object.keys(utils)) {
      const alias = aliasMap.has(name) ? aliasMap.get(name!) : name
      addImports({
        name: name,
        as: alias,
        from: resolve('../../dist/index')
      })
    }

    addPlugin(resolve('./runtime/plugin'))
  }
})
