import pluginTailwindCSS from 'eslint-plugin-tailwindcss'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      'vue/html-closing-bracket-newline': ['error', {
        singleline: 'never',
        multiline: 'never',
      }],
    },
  },
  {
    plugins: { tailwindcss: pluginTailwindCSS },
    rules: pluginTailwindCSS.configs.recommended.rules,
  },
)
