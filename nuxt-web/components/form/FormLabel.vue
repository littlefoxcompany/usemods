<template>
  <label class="flex w-full items-end justify-between gap-4 pb-3 leading-none text-zinc-500">
    <span>{{ label }}</span>
    <div
      v-if="info"
      class="text-xs/none font-medium opacity-75">{{ info }}</div>
  </label>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
  },
  info: {
    type: String,
  },
})
</script>
