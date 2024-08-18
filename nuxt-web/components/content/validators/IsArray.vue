<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value" />
    </ExampleInputs>
    <ExampleResult>
      {{ isArray(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref(['a', 'b', 'c'])
</script>
