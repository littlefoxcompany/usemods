import globals from 'globals'
// import pluginJs from "@eslint/js"
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

/** @type {import('eslint').Linter.Config[]} */

export default [
  ...tseslint.configs.recommended,

  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: { globals: globals.browser },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      ...stylistic.configs['recommended-flat'].rules,
      'function-paren-newline': ['error', 'multiline-arguments'],
    },
  },
]
