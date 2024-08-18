<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="text" />
    </ExampleInputs>
    <ExampleResult>
      {{ isUuid(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('123e4567-e89b-12d3-a456-426614174000')
</script>
