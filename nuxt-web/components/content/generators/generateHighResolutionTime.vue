<template>
  <Example>
    <ExampleInputs>
      <Button @click="generate" color="secondary">Generate</Button>
    </ExampleInputs>
    <ExampleResult>
      {{ result }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const result = ref('')
function generate() {
  result.value = generateHighResolutionTime().toString()
}

onMounted(() => {
  generate()
})
</script>