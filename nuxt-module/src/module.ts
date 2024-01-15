import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addImports,
} from "@nuxt/kit"

import * as utils from "./runtime/utils/index"

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "mods-module",
    configKey: "modsModule",
  },
  // Default configuration options of the Nuxt module
  defaults: {
    alias: [],
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    const aliasMap = new Map<string, string>(options.alias)
    for (const name of Object.keys(utils)) {
      const alias = aliasMap.has(name) ? aliasMap.get(name!) : name
      console.debug(`Adding ${name} as ${alias}`)
      addImports({
        name: name,
        as: alias,
        from: resolve("./runtime/utils/index.ts"),
      })
    }

    addPlugin(resolve("./runtime/plugin"))
  },
})
