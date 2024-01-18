<template>
  <label class="text-zinc-500 justify-between gap-4 pb-3 leading-none flex">
    <div>
      {{ label }}
    </div>

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
