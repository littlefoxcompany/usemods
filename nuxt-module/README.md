![Frame 1209](https://public.usemods.com/Nuxt@2x.jpg)

# Use Mods (Nuxt Module)
Auto-imported functions and modifiers for zippy Nuxt developers. 

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/usemods-nuxt/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/usemods-nuxt

[npm-downloads-src]: https://img.shields.io/npm/dm/usemods-nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/usemods-nuxt

[license-src]: https://img.shields.io/npm/l/usemods-nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/usemods-nuxt

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com

[![CI](https://github.com/LittleFoxCompany/usemods/actions/workflows/ci.yml/badge.svg)](https://github.com/LittleFoxCompany/usemods/actions/workflows/ci.yml)

[![CodeQL](https://github.com/LittleFoxCompany/usemods/actions/workflows/github-code-scanning/codeql/badge.svg?branch=main)](https://github.com/LittleFoxCompany/usemods/actions/workflows/github-code-scanning/codeql)

## Quick Setup
```bash
npx nuxi module add usemods-nuxt
```

## Manual Setup

1. Add `usemods-nuxt` dependency to your project


```bash
# Using pnpm
pnpm add -D usemods-nuxt

# Using yarn
yarn add --dev usemods-nuxt

# Using npm
npm install --save-dev usemods-nuxt
```

2. Add `usemods-nuxt` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["usemods-nuxt"],
})
```

That's it! You've got every mod util in your Nuxt app ✨🛵
