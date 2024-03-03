<template>
  <Example>
    <ExampleResult>{{ result }}</ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const result = ref({ x: 0, y: 0 })

  onMounted(() => {
    window.addEventListener('scroll', (event: Event) => {
      result.value = detectScrollPosition()
    })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', (event: Event) => {
      result.value = detectScrollPosition()
    })
  })
</script>
