<template>
  <div
    class="bg-indigo-50 dark:bg-indigo-600/10 text-pretty flex flex-wrap rounded-lg w-full border border-indigo-200 dark:border-indigo-900/70 shadow-xl shadow-indigo-500/5 text-indigo-600 dark:text-indigo-400 px-3 py-2.5 items-center leading-tight">
    <slot />
  </div>
</template>

<style scoped>
  :deep(code) {
    @apply dark:bg-indigo-600/15 bg-indigo-700/75 text-white inline rounded-md px-1 py-0 text-sm font-mono mx-1 dark:text-indigo-300;
  }
</style>
