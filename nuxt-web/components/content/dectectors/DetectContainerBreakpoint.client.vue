<template>
  <Example ref="container">
    <ExampleResult>
      {{ result }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const result = ref('')
const container = ref<ComponentPublicInstance | null>(null)

function handleResize() {
  if (container.value) {
    result.value = detectContainerBreakpoint(container.value.$el)
  }
}

onMounted(() => {
  nextTick(() => {
    handleResize()
  })
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
