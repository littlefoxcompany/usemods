<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="text" />
    </ExampleInputs>
    <ExampleResult>
      {{ kebabCase(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('Scoots and Scooters')
</script>
