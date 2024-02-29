<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model.number="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ sum(convertToArray(value)) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('[1, 2, 3, 4, 5]')
</script>
