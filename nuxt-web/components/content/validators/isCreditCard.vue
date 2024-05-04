<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="number" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ isCreditCard(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('4242424242424242')
</script>
