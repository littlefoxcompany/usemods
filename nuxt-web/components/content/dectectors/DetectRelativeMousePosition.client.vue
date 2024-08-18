<template>
  <Example>
    <ExampleResult>{{ result }}</ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const result = ref({ x: 0, y: 0 })

onMounted(() => {
  window.addEventListener('mousemove', (event: MouseEvent) => (result.value = detectRelativeMousePosition(event)))
})

onUnmounted(() => {
  window.removeEventListener('mousemove', (event: Event) => {
    result.value = detectRelativeMousePosition(event as MouseEvent)
  })
})
</script>
