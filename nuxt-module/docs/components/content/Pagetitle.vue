<template>
  <div class="pb-16">
    <slot />
  </div>
</template>

<style scoped>
  :deep(h1) {
    @apply text-4xl font-bold;
  }
  :deep(p) {
    @apply text-2xl pt-4 font-light;
  }
</style>
