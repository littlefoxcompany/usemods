<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="number" />
    </ExampleInputs>
    <ExampleResult>
      {{ isCreditCard(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('4242424242424242')
</script>
