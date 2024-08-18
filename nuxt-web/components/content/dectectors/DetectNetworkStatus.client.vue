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
  result.value = detectNetworkStatus()
}

onMounted(() => {
  updateResult()
  window.addEventListener('online', updateResult)
})

onUnmounted(() => {
  window.removeEventListener('online', updateResult)
})
</script>
