<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="number" v-model.number="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ isPort(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref(3000)
</script>
