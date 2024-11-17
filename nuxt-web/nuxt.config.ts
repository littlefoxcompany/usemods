export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    'nuxt-icon',
    '@nuxtjs/seo',
    '@nuxtjs/sitemap',
    '@nuxthub/core',
  ],

  css: ['~/assets/css/main.css'],

  imports: {
    dirs: ['utils/mods'],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [{ property: 'og:image', content: '/og-image.jpg' }],
    },
  },

  // hub: {
  //   cache: true,
  // },
  sitemap: {
    sources: [
      '/api/sitemap',
    ],
  },

  site: {
    name: 'UseMods',
    description: 'UseMods is a collection of helper functions for JavaScript and TypeScript.',
    url: 'https://usemods.com',
  },

  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
  },

  content: {
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
      preload: ['javascript', 'typescript', 'json', 'html', 'css', 'yaml'],
    },
    ignores: ['\\.txt$'],
  },

  routeRules: {
    '/': { prerender: true },
    '/docs/**': { swr: true, prerender: true },
    '/intro/**': { swr: true, prerender: true },
  },

  image: {
    cloudflare: {
      baseURL: 'https://usemods.com/',
      modifiers: {
        format: 'auto',
        quality: 85,
      },
    },
  },

  colorMode: {
    classSuffix: '',
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  devtools: { enabled: true },
  compatibilityDate: '2024-11-14',
})