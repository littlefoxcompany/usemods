<template>
  <div class="pb-12">
    <!-- Breadcrumb -->
    <div class="mb-4 flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-white/50">
      <div>Docs</div>
      <div>/</div>
      <div class="capitalize" v-if="route.params.slug?.at(-1)">{{ route.params.slug?.at(-1) }}</div>
    </div>
    <div class="text-gray-950 dark:text-white">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  const route = useRoute()
</script>

<style scoped>
  :deep(h1) {
    @apply text-4xl font-bold;
  }
  :deep(p) {
    @apply text-pretty pt-4 font-light md:text-xl/[1.6em] lg:text-2xl/[1.6em];
  }
</style>
