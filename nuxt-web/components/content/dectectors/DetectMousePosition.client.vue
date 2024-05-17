<template>
  <Example>
    <ExampleResult>{{ result }}</ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const result = ref({ x: 0, y: 0 })

  onMounted(() => {
    window.addEventListener('mousemove', (event: MouseEvent) => (result.value = detectMousePosition(event)))
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', (event: Event) => {
      result.value = detectMousePosition(event as MouseEvent)
    })
  })
</script>
