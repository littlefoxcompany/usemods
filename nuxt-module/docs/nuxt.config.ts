export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: ['../src/module', '@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/content', '@nuxt/image'],
  devtools: { enabled: true }
})
