<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model.number="value"
        label="Value"
        type="text" />
    </ExampleInputs>
    <ExampleResult>
      {{ isNumber(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('one')
</script>
