export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    'shadcn-nuxt',
    'nuxt-icon',
  ],
  css: ['~/assets/css/main.css'],
  content: {
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
      preload: ['javascript', 'typescript', 'json', 'html', 'css', 'yaml']
    },
    ignores: ['\\.txt$'],
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
  eslint: {
    config: {
      stylistic: true,
    },
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  devtools: { enabled: false }
})