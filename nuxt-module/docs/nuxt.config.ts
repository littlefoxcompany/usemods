export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: ['../src/module', '@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/content', '@nuxt/image', 'nuxt-monaco-editor'],
  devtools: { enabled: true },

  monacoEditor: {
    languages: ['javascript', 'typescript', 'json', 'html', 'css', 'yaml']
  }
})
