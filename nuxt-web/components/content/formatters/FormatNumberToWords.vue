<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Number" type="text" v-model="value" />
    </ExampleInputs>
    <ExampleCode :code="`formatNumberToWords(${value})`" />
    <ExampleResult>
      {{ formatNumberToWords(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref(1234567)
</script>
