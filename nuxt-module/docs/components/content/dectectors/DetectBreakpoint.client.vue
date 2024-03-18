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
    window.addEventListener('resize', (event) => (result.value = detectBreakpoint()))
  })

  onUnmounted(() => {
    window.removeEventListener('resize', (event) => (result.value = detectBreakpoint()))
  })
</script>
