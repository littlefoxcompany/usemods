<template>
  <div class="pb-12">
    <!-- Breadcrumb -->
    <div class="flex items-center gap-2 mb-4 text-sm font-medium text-white/50">
      <div>Docs</div>
      <div>/</div>
      <div>Page</div>
    </div>
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
