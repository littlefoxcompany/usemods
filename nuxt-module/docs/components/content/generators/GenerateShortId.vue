<template>
  <ExampleClientOnly>
    {{ generateShortId(length) }}
  </ExampleClientOnly>
</template>

<script setup lang="ts">
  const length = ref(36)
</script>
