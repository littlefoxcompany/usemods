<template>
  <label class="flex w-full justify-between gap-4 pb-3 items-end leading-none text-zinc-500">
    <span>{{ label }}</span>
    <div v-if="info" class="text-xs/none font-medium opacity-75">{{ info }}</div>
  </label>
</template>

<script setup lang="ts">
  const props = defineProps({
    label: {
      type: String
    },
    info: {
      type: String
    }
  })
</script>
