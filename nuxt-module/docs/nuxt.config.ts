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
  routeRules: {
    '/docs/**': { cache: { maxAge: 60 * 60 * 24 } },
    '/intro/**': { cache: { maxAge: 60 * 60 * 24 } }
  },
  colorMode: {
    classSuffix: ''
  },
  devtools: { enabled: false }
})
