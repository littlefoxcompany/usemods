<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Text" type="text" v-model="value" />
    </ExampleInputs>
    <ExampleCode :code="`formatTextWrap(${value})`" />
    <ExampleResult>
      {{ formatTextWrap(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('Scooters are the future')
</script>
