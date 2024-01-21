<template>
  <section class="py-12">
    {{ name }}
    <slot />
  </section>
</template>

<script setup lang="ts">
  const props = defineProps({
    name: {
      type: String
    }
  })
</script>

<style scoped>
  :deep(h3) {
    @apply font-semibold text-3xl;
  }
  :deep(pre) {
    @apply bg-white/[4%] shadow-xl rounded-lg p-3 font-mono mt-6 border border-white/5;
  }
  :deep(p) {
    @apply text-lg mt-2.5 first:text-xl text-zinc-400;
  }
</style>
