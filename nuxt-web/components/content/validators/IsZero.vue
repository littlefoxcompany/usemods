<template>
  <Example>
    <ExampleInputs>
      <FormNumber
        v-model.number="value"
        label="Value" />
    </ExampleInputs>
    <ExampleResult>
      {{ isZero(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref(0)
</script>
