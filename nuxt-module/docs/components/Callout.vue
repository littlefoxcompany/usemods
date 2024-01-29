<template>
  <div class="bg-blue-600/10 rounded-lg w-full border border-blue-900/70 shadow-xl shadow-blue-500/5 text-blue-400 px-4 py-2 flex items-center leading-tight">
    <slot />
  </div>
</template>

<style scoped>
  :deep(code) {
    @apply bg-blue-600/15 rounded-lg px-1.5 py-1 text-sm font-mono mx-2 text-blue-300;
  }
</style>
