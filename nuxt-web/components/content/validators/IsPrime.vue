<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model.number="value"
        label="Value"
        type="number" />
    </ExampleInputs>
    <ExampleResult>
      {{ isPrime(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref(1)
</script>
