<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model.number="value"
        label="Value"
        type="text" />
    </ExampleInputs>
    <ExampleCode :code="`skewness(${value})`" />
    <ExampleResult>
      {{ skewness(JSON.parse(value)) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('[1, 4, 30]')
</script>
