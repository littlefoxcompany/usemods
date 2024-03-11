<template>
  <Shiki :lang="lang" :code="code" />
</template>

<script setup lang="ts">
  const props = defineProps({
    lang: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    }
  })
</script>
