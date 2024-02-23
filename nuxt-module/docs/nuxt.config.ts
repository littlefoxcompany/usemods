export default defineNuxtConfig({
  modules: ['../src/module', '@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/content', '@vueuse/nuxt', '@nuxt/image', '@nuxtjs/color-mode'],
  css: ['~/assets/css/main.css'],
  content: {
    highlight: {
      theme: 'github-dark',
      preload: ['javascript', 'typescript', 'json', 'html', 'css', 'yaml']
    },
    experimental: {
      search: true
    }
  },
  colorMode: {
    classSuffix: ''
  },
  devtools: { enabled: true }
})
