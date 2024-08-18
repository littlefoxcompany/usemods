<template>
  <Example>
    <ExampleInputs>
      <FormNumber
        v-model.number="value"
        label="Value" />
      <FormNumber
        v-model.number="value2"
        label="Min" />
      <FormNumber
        v-model.number="value3"
        label="Max" />
    </ExampleInputs>
    <ExampleResult>
      {{ isBetween(value, value2, value3) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref(1)
const value2 = ref(2)
const value3 = ref(10)
</script>
