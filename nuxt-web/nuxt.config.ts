export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxt/eslint'
  ],
  css: ['~/assets/css/main.css'],
  content: {
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
      preload: ['javascript', 'typescript', 'json', 'html', 'css', 'yaml']
    }
  },
  app: {
    head: {
      meta: [{ property: 'og:image', content: '/og-image.jpg' }]
    }
  },
  // routeRules: {
  //   '/docs/**': { swr: true, prerender: true },
  //   '/intro/**': { swr: true, prerender: true }
  // },
  colorMode: {
    classSuffix: ''
  },
  devtools: { enabled: false }
})
