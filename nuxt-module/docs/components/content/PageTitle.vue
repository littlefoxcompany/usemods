<template>
  <div class="pb-12">
    <slot />
  </div>
</template>

<style scoped>
  :deep(h1) {
    @apply text-4xl font-bold;
  }
  :deep(p) {
    @apply text-xl/[1.6em] text-white/75 pt-4 font-light text-pretty;
  }
</style>
