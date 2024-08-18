<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="text" />
    </ExampleInputs>
    <ExampleResult>
      {{ isInteger(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref(1)
</script>
