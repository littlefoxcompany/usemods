<template>
  <Example>
    <ExampleResult>
      {{ detectNetworkStatus() }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const result = ref('')

  onMounted(() => {
    setInterval(() => {
      result.value = detectNetworkStatus()
    }, 1000)
  })
</script>
