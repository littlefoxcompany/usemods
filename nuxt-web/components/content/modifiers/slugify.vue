<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="text" />
    </ExampleInputs>
    <ExampleResult>
      {{ slugify(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('Scooters are the future')
</script>
