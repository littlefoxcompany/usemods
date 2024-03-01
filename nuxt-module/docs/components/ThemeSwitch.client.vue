<template>
  <div class="flex items-center gap-6">
    <button type="button" name="theme-toggle" @click="toggle" class="relative flex h-8 w-8 overflow-hidden rounded-md border border-gray-200 p-[8px] dark:border-white/20">
      <div
        class="absolute flex flex-col items-center justify-center gap-3 transition-all duration-500"
        :class="{
          'rotate-0': colorMode.value === 'dark',
          'rotate-180': colorMode.value === 'light'
        }">
        <Icon name="heroicons:moon-solid" class="h-3.5 w-3.5 text-gray-300 dark:text-white" />
        <Icon name="heroicons:sun-solid" class="h-3.5 w-3.5 text-amber-500" />
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
  const colorMode = useColorMode()

  function toggle() {
    colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
  }
</script>
