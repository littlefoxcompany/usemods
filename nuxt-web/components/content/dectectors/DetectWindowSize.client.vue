<template>
  <Example>
    <ExampleResult>
      {{ result }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const result = ref({ width: 0, height: 0 })

  function updateResult() {
    result.value = detectWindowSize()
  }

  onMounted(() => {
    updateResult()
    window.addEventListener('resize', updateResult)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateResult)
  })
</script>
