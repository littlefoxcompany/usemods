<template>
  <Example ref="example">
    <ExampleResult>{{ detectInViewport(example) }}</ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const example = ref()
</script>
