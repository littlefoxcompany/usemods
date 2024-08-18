<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Text"
        type="text" />
    </ExampleInputs>
    <ExampleCode :code="`formatTextWrap('${value}')`" />
    <ExampleResult>
      {{ formatTextWrap(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('Scooters are the future')
</script>
