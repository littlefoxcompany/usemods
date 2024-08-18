<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="text" />
    </ExampleInputs>
    <ExampleResult>
      {{ isDate(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref(new Date())
</script>
