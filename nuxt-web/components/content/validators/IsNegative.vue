<template>
  <Example>
    <ExampleInputs>
      <FormNumber
        v-model="value"
        label="Value"
        type="text" />
    </ExampleInputs>
    <ExampleResult>
      {{ isNegative(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref(-1)
</script>
