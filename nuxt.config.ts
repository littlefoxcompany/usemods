export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: ['@nuxtjs/plausible', 'nuxt-vitest', '@nuxt/devtools'],
  vitest: {},

  devtools: true
})
