<template>
  <Example>
    <ExampleResult>
      {{ result }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const result = ref('')

  function updateResult() {
    result.value = detectBreakpoint()
  }

  onMounted(() => {
    updateResult()
    window.addEventListener('resize', updateResult)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateResult)
  })
</script>
