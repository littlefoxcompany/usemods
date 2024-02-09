<template>
  <div
    class="bg-blue-600/10 text-pretty flex flex-wrap items-center rounded-lg w-full border border-blue-900/70 shadow-xl shadow-blue-500/5 text-blue-400 px-3 py-2.5 items-center leading-tight">
    <slot />
  </div>
</template>

<style scoped>
  :deep(code) {
    @apply bg-blue-600/15 inline rounded-lg px-1 py-0.5 text-sm font-mono mx-1 text-blue-300;
  }
</style>
