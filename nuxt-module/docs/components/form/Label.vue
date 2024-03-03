<template>
  <label class="flex justify-between gap-4 pb-3 leading-none text-zinc-500">
    {{ label }}

    <div v-if="info">{{ info }}</div>
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
