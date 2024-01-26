<template>
  <Example>
    <ExampleInputs>
      <Button @click="generate" color="dark">Generate</Button>
    </ExampleInputs>
    <ExampleResult>
      {{ result }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const result = ref('')
  function generate() {
    result.value = generateUuid()
  }

  onMounted(() => {
    nextTick(() => {
      generate()
    })
  })
</script>
