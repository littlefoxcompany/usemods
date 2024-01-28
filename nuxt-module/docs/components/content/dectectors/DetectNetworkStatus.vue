<template>
  <ExampleClientOnly>
    {{ result }}
  </ExampleClientOnly>
</template>

<script setup lang="ts">
  const result = ref('')

  onMounted(() => {
    setInterval(() => {
      result.value = detectNetworkStatus()
    }, 1000)
  })
</script>
