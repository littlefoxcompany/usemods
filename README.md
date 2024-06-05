![Frame 1209](https://github.com/jrmymbtlr/usemods/assets/24998792/e2dda730-da67-448d-b1c8-bad447c5fa5b)

# Use Mods (usemods).
Zero-dependency functions and modifiers for zippy developers. 

<!-- Badges -->
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![CI][ci-src]][ci-href]
[![CodeQL][codeql-src]][codeql-href]

[npm-version-src]: https://img.shields.io/npm/v/usemods/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/usemods

[npm-downloads-src]: https://img.shields.io/npm/dm/usemods.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/usemods

[license-src]: https://img.shields.io/npm/l/usemods.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/usemods

[ci-src]: https://github.com/LittleFoxCompany/usemods/actions/workflows/ci.yml/badge.svg
[ci-href]: https://github.com/LittleFoxCompany/usemods/actions/workflows/ci.yml

[codeql-src]: https://github.com/LittleFoxCompany/usemods/actions/workflows/github-code-scanning/codeql/badge.svg?branch=main
[codeql-href]: https://github.com/LittleFoxCompany/usemods/actions/workflows/github-code-scanning/codeql

# Installation
Use your favourite package manager to install usemods. Also works with your least favourite package manager.

```bash
npm install usemods
```

## Nuxt
If you use Nuxt, you can automatically add the module to your nuxt.config.js. We're actively working on composables and other Nuxt-specific features, so stay tuned!

```bash
npx nuxi module add usemods-nuxt
```

# Usage
Once you've installed the package, you can import the functions as you need. We'll add better examples in the future, but hopefully your familiar with the basics.
```vue
<!-- Vue -->
<template>
  <div>
    {{ formatNumber(123456789) }}
  </div>
  <button @click="copyToClipboard('Hello, world!')">
    Copy to clipboard
  </button>
</template>

<script setup>
  import { copyToClipboard, formatNumber } from 'usemods'
</script>
```

# Contributing
Welcome to the documentation for Mods. We combine Nuxt Content and Vue Components to achieve interactive blocks.

### Content
To make content changes to the docs, please refer to the original `./src` and use `bun run docs` to compile update-to-date markdown files here. You can read more on the compiler in `./docs.mjs`

### Vue Components
To make changes to how the Mod displays and interacts, please see the corresponding `.vue` files found in `./nuxt-web/components/content/`

### Running the Website
To run the UseMods website, run `bun run dev` from the website folder which should perform any installs first, then checkout `localhost:3000`.

### Running the Docs Compiler
To make the magic happen, run the `bun install` on the root. From there, you can run `bun run docs` to initiate a watcher and compiler on `./src`. You'll now generate documentation from the JSDOCs and sync files to the utils section in the Nuxt Website and Nuxt Module.
