<template>
  <NuxtLink
    :to="to"
    class="flex items-center gap-3 rounded-lg border border-transparent px-4 py-2.5 text-gray-500 transition-all hover:border-white/10 hover:bg-white/5 dark:text-white">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
  const props = defineProps({
    to: {
      type: String,
      required: true
    }
  })
</script>
