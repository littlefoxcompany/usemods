<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="text" />
    </ExampleInputs>
    <ExampleResult>
      {{ isAlphanumeric(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('abc123')
</script>
