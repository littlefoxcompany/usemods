<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="text" />
    </ExampleInputs>
    <ExampleResult>
      {{ stripNumbers(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('Scooters123')
</script>
