<template>
  <Example ref="container">
    <ExampleResult>
      {{ result }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const result = ref('')
  const container = ref<HTMLElement | null>(null)

  function updateResult() {
    if (container.value) {
      result.value = detectContainerBreakpoint(container.value)
    }
  }

  onMounted(() => {
    updateResult()
    window.addEventListener('resize', updateResult)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateResult)
  })
</script>
