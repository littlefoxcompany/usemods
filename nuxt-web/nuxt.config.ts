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
    '@nuxtjs/seo',
    '@nuxtjs/sitemap'
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [{ property: 'og:image', content: '/og-image.jpg' }]
    }
  },
  sitemap: {
    sources: [
      '/api/sitemap'
    ]
  },
  site: {
    name: 'UseMods',
    description: 'UseMods is a collection of helper functions for JavaScript and TypeScript.',
    url: 'https://usemods.com'
  },
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
  routeRules: {
    '/': { prerender: true },
    '/docs/**': { swr: true, prerender: true },
    '/intro/**': { swr: true, prerender: true }
  },
  image: {
    cloudflare: {
      baseURL: 'https://public.usemods.com/'
    }
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