<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model.number="value"
        label="Value"
        type="number" />
    </ExampleInputs>
    <ExampleResult>
      {{ isEven(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref(2)
</script>
