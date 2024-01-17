<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="number" v-model="percentage" />
    </ExampleInputs>
    <ExampleResult>
      {{ formatPercentage(percentage) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const percentage = ref(0.12)
</script>
