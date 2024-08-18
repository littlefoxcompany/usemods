<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model.number="value"
        label="Value"
        type="text" />
    </ExampleInputs>
    <ExampleCode :code="`average(${value})`" />
    <ExampleResult>
      {{ average(JSON.parse(value)) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('[1, 2, 3, 4, 5]')
</script>
