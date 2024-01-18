<template>
  <button @click="copyToClipboard(copy)" class="text-white/25 hover:text-white transition-all">
    <Icon name="carbon:copy" class="w-4 h-4" />
  </button>
</template>

<script setup lang="ts">
  const props = defineProps({
    copy: {
      type: [String, Number],
      default: ''
    }
  })
</script>
