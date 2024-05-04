<template>
  <Example ref="container">
    <ExampleResult>
      {{ result }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const container = ref<HTMLElement | null>(null)
  const result = ref({})

  onMounted(() => {
    if (container.value) {
      result.value = detectContainerSize(container.value)
    }
  })
</script>
