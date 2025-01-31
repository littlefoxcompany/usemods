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
  nextTick(() => (result.value = detectDeviceOrientation()))
  window.addEventListener('orientationchange', () => (result.value = detectDeviceOrientation()))
})

onUnmounted(() => {
  window.removeEventListener('orientationchange', () => (result.value = detectDeviceOrientation()))
})
</script>
