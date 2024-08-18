<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="text" />
    </ExampleInputs>
    <ExampleResult>
      {{ isNull(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref(null)
</script>
