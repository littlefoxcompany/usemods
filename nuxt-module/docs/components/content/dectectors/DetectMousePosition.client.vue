<template>
  <Example>
    <ExampleResult>{{ result }}</ExampleResult>
  </Example>
  <Callout class="mt-8">
    <Icon class="mr-2 h-5 w-5" name="heroicons:cursor-arrow-rays" />
    Don't forget to add a mousemove event listener
  </Callout>
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
