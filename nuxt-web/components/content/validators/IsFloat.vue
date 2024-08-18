<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model.number="value"
        label="Value"
        type="number" />
    </ExampleInputs>
    <ExampleResult>
      {{ isFloat(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref(1.1)
</script>
