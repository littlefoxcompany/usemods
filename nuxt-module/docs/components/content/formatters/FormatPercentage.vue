<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="number" v-model.number="percentage" step="0.01" />
    </ExampleInputs>
    <ExampleResult>
      {{ formatPercentage(percentage) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const percentage = ref(0.12)
</script>
