<template>
  <section class="py-16">
    <slot />
  </section>
</template>

<style scoped>
  :deep(h3) {
    @apply font-semibold text-3xl;
  }
  :deep(pre) {
    @apply bg-white/[2%] rounded-lg p-4 mt-6 border border-white/5;
  }
  :deep(p) {
    @apply text-lg mt-3 first:text-xl text-zinc-400;
  }
</style>
