export default defineNuxtConfig({
  modules: ['../src/module', '@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/content', '@vueuse/nuxt', '@nuxt/image', '@nuxtjs/color-mode'],
  css: ['~/assets/css/main.css'],
  content: {
    highlight: {
      theme: 'github-dark',
      preload: ['javascript', 'typescript', 'json', 'html', 'css', 'yaml']
    }
    // experimental: {
    //   search: true
    // }
  },
  app: {
    head: {
      meta: [{ property: 'og:image', content: '/og-image.jpg' }]
    }
  },
  routeRules: {
    '/docs/**': { swr: true, prerender: true },
    '/intro/**': { swr: true, prerender: true }
  },
  colorMode: {
    classSuffix: ''
  },
  devtools: { enabled: false }
})
