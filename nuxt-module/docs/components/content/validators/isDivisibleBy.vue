<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="number" v-model.number="value" />
      <FormInput label="Divisor" type="number" v-model.number="divisor" />
    </ExampleInputs>
    <ExampleResult>
      {{ isDivisibleBy(value, divisor) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref(18)
  const divisor = ref(2)
</script>
