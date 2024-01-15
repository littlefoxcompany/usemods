export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: ['@nuxtjs/plausible', 'nuxt-vitest', '@nuxtjs/tailwindcss'],
  vitest: {},
  devtools: true
})
