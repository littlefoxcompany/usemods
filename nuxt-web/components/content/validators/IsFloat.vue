<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="number" v-model.number="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ isFloat(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref(1.1)
</script>
