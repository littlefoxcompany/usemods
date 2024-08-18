<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="number" />
    </ExampleInputs>
    <ExampleResult>
      {{ isLongitude(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('180.0')
</script>
