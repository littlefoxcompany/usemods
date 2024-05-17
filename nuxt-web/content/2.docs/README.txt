# Compiled Docs
Welcome to the documentation for Mods. We combine Nuxt Content and Vue Components to achieve interactive blocks.

### Content
To make content changes to the docs, please refer to the original `./src` and use `bun run docs` to compile update-to-date markdown files here. You can read more on the compiler in `./docs.mjs`

### Functionality
To make changes to how the Mod displays and interacts, please see the corresponding `.vue` files found in `./nuxt-web/components/content/`

### Improvements
This split allows us to share documentation across the final package and the [usemods.com](http://usemods.com) website. As we progress, I’m sure we’ll find a better and neater way to keep our worlds in sync.