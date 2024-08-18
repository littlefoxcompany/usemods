<template>
  <Example>
    <ExampleResult>
      {{ result }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const result = ref('')

onMounted(() => {
  result.value = detectBreakpoint()
  window.addEventListener('resize', () => (result.value = detectBreakpoint()))
})

onUnmounted(() => {
  window.removeEventListener('resize', () => (result.value = detectBreakpoint()))
})
</script>
