export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: ['../src/module', '@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/content', '@vueuse/nuxt', '@nuxt/image'],
  content: {
    highlight: {
      theme: 'github-dark',
      preload: ['javascript', 'typescript', 'json', 'html', 'css', 'yaml']
    },
    experimental: {
      search: true
    }
  },
  devtools: { enabled: true },
  monacoEditor: {
    languages: ['javascript', 'typescript', 'json', 'html', 'css', 'yaml']
  }
})
