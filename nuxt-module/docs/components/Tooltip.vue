<template>
  <div class="group relative">
    <div class="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-full flex-col items-center justify-center gap-1 rounded-md border border-white/10 bg-zinc-800 px-2 py-1">
      <div>{{ value }}</div>
      <div v-if="default" class="whitespace-nowrap">default: {{ default }}</div>
    </div>
    <div class="flex justify-stretch gap-4 rounded-lg border border-white/[4%] bg-white/[3%] px-2 text-white/75">
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
