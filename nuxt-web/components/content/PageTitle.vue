<template>
  <div class="md:pb-8">
    <!-- Breadcrumb -->
    <div class="mb-4 flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-white/50">
      <div>Docs</div>
      <div>/</div>
      <div
        v-if="route.params.slug?.at(-1)"
        class="capitalize">
        {{ route.params.slug?.at(-1) }}
      </div>
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
  :deep(p) {
    @apply text-pretty font-light md:text-xl/[1.6em] lg:text-2xl/[1.6em];
  }
</style>
