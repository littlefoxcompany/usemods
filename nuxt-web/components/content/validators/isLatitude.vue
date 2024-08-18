<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="number" />
    </ExampleInputs>
    <ExampleResult>
      {{ isLatitude(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('90.0')
</script>
