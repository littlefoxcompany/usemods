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
    setInterval(() => {
      result.value = detectURL()
    }, 1000)
  })
</script>
