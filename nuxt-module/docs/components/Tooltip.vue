<template>
  <div class="relative group">
    <div class="flex flex-col items-center justify-center absolute top-0 -translate-y-full left-1/2 -translate-x-1/2 bg-zinc-800 px-2 py-1 gap-1 rounded-md border border-white/10">
      <div>{{ value }}</div>
      <div v-if="default" class="whitespace-nowrap">default: {{ default }}</div>
    </div>
    <div class="flex gap-4 bg-white/[3%] text-white/75 justify-stretch px-2 rounded-lg border border-white/[4%]">
      {{ label }}
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    label: String,
    value: String,
    default: String
  })
</script>
