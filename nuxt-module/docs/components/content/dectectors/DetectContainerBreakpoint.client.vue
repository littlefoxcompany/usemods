<template>
  <Example ref="container">
    <ExampleResult>
      {{ result }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const result = ref('')
  const container = ref<HTMLElement>()

  onMounted(() => {
    if (container.value) result.value = detectContainerBreakpoint(container.value)

    window.addEventListener('resize', (event) => {
      if (container.value) result.value = detectContainerBreakpoint(container.value)
    })
  })

  onUnmounted(() => {
    window.removeEventListener('resize', (event) => {
      if (container.value) result.value = detectContainerBreakpoint(container.value)
    })
  })
</script>
