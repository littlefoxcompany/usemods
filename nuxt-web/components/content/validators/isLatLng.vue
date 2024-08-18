<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value" />
    </ExampleInputs>
    <ExampleResult>
      {{ isLatLng(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('90.0, 180.0')
</script>
