<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="text" />
    </ExampleInputs>
    <ExampleResult>
      {{ isTime(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('12:00')
</script>
