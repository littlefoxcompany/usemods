<template>
  <div class="flex items-center gap-6">
    <button type="button" @click="toggle" class="flex h-8 w-8 overflow-hidden relative bg-white/10 rounded-full border border-white/10">
      <div class="flex flex-col items-center justify-center gap-3 absolute">
        <Icon name="heroicons:computer-desktop-solid" class="w-5 h-5 text-white/50" />
        <Icon name="heroicons:sun-solid" class="w-5 h-5 text-white/50" />
        <Icon name="heroicons:moon-solid" class="w-5 h-5 text-white/50" />
      </div>
    </button>
    <!-- <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select> -->
  </div>
</template>

<script setup lang="ts">
  const colorMode = useColorMode()

  function toggle() {
    colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
  }
</script>
