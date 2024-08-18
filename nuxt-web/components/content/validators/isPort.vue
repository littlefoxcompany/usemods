<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model.number="value"
        label="Value"
        type="number" />
    </ExampleInputs>
    <ExampleResult>
      {{ isPort(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref(3000)
</script>
