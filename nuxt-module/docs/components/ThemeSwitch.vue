<template>
  <div class="flex items-center gap-6">
    <button type="button" @click="toggle" class="flex h-8 w-8 p-[8px] overflow-hidden relative rounded-md border dark:border-white/20 border-gray-200">
      <div class="flex flex-col items-center justify-center gap-3 absolute transition-all duration-500" :class="colorMode.value === 'dark' ? 'rotate-0' : '-rotate-180'">
        <Icon name="heroicons:moon-solid" class="w-3.5 h-3.5 text-white" />
        <Icon name="heroicons:sun-solid" class="w-3.5 h-3.5 text-amber-500" />
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
