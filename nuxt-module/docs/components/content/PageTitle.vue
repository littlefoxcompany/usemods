<template>
  <div class="pb-12">
    <!-- Breadcrumb -->
    <div class="flex items-center gap-2 mb-4 text-sm font-medium text-gray-400 dark:text-white/50">
      <div>Docs</div>
      <div>/</div>
      <div class="capitalize" v-if="route.params.slug?.at(-1)">{{ route.params.slug?.at(-1) }}</div>
    </div>
    <div class="dark:text-white text-gray-950">
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
    @apply text-xl/[1.6em] pt-4 font-light text-pretty;
  }
</style>
