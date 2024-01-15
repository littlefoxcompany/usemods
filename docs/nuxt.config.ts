export default defineNuxtConfig({
  extends: "@nuxt-themes/docus",
  modules: [
    "@nuxtjs/plausible",
    "nuxt-vitest",
    "@nuxt/devtools",
    "../nuxt-module/src/module",
  ],
  vitest: {},
  devtools: true,
})
