<template>
  <Example>
    <ExampleResult>
      {{ result }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const result = ref('')
  const check = computed(() => {
    setInterval(() => {
      result.value = detectActiveBrowser().toString()
    }, 1000)
  })

  onMounted(() => {
    check.value
  })

  onUnmounted(() => {
    clearInterval(check.value as unknown as NodeJS.Timeout)
  })
</script>
