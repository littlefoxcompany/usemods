<template>
  <Example>
    <ExampleResult>
      {{ result }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const result = ref(false)

  function updateResult() {
    result.value = detectActiveBrowser()
  }

  onMounted(() => {
    updateResult()
  })

  onUnmounted(() => {})
</script>
