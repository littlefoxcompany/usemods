<template>
  <ExampleClientOnly>
    {{ result }}
  </ExampleClientOnly>
</template>

<script setup lang="ts">
  const result = computed(() => {
    return detectActiveBrowser()
  })
</script>
