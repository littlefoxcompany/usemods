<template>
  <Example>
    <ExampleInputs>
      <Button
        color="secondary"
        @click="generate">
        Generate
      </Button>
    </ExampleInputs>
    <ExampleResult>
      {{ result }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const result = ref('')
function generate() {
  result.value = generateUuid7()
}

onMounted(() => {
  nextTick(() => {
    generate()
  })
})
</script>
