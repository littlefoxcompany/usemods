<template>
  <Example>
    <ExampleInputs>
      <FormNumber
        v-model.number="value"
        label="Value"
        type="number" />
    </ExampleInputs>
    <ExampleResult>
      {{ isPositive(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref(1)
</script>
