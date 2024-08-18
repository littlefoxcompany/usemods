<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model.number="value"
        label="Value"
        type="number" />
      <FormInput
        v-model.number="divisor"
        label="Divisor"
        type="number" />
    </ExampleInputs>
    <ExampleResult>
      {{ isDivisibleBy(value, divisor) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref(18)
const divisor = ref(2)
</script>
