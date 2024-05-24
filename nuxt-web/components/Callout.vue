<template>
  <div
    class="flex gap-2 w-full flex-wrap items-center text-pretty rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-4 leading-tight text-indigo-600 shadow-xl shadow-indigo-500/5 dark:border-indigo-900/70 dark:bg-indigo-600/10 dark:text-indigo-400">
    <slot />
  </div>
</template>

<style scoped>
  :deep(code) {
    @apply mx-1 inline rounded-md bg-indigo-700/75 px-1 py-0 font-mono text-sm text-white dark:bg-indigo-600/15 dark:text-indigo-300;
  }
</style>
