<template>
  <Example>
    <ExampleResult>{{ result }}</ExampleResult>
  </Example>
  <Callout class="mt-8">
    <Icon class="w-5 h-5 mr-2" name="heroicons:cursor-arrow-rays" />
    Don't forget to add a mousemove event listener
  </Callout>
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
