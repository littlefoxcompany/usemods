<template>
  <div class="flex items-center justify-between gap-6 bg-white px-5 py-4 dark:bg-white/[3%]">
    <div class="flex items-start gap-3">
      <div class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-50 dark:bg-white/5">
        <Icon name="ph:equals-bold" class="w-3 shrink-0 text-indigo-600 dark:text-white/50" />
      </div>
      <div class="min-h-7 text-xl font-semibold">
        <slot />
      </div>
    </div>
    <div class="font-mono text-sm/none text-gray-300 max-md:hidden dark:text-white/25">Result</div>
  </div>
</template>

<script setup lang="ts">


</script>
