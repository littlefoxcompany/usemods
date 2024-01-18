<template>
  <ContentDoc class="flex flex-col grow divide-y divide-dashed divide-white/5" />
</template>

<style>
  .docs {
    h3 {
      @apply font-semibold text-2xl mt-16;
    }
    pre {
      @apply bg-white/[2%] rounded-lg p-4 mt-6 border border-white/5;
    }
    p {
      @apply text-lg mt-2 first:text-xl;
    }
  }
</style>
