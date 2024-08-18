<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="text" />
    </ExampleInputs>
    <ExampleResult>
      {{ camelCase(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('scoots and scooters')
</script>
