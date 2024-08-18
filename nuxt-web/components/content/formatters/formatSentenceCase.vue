<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Text"
        type="text" />
    </ExampleInputs>
    <ExampleCode :code="`formatSentenceCase('${value}')`" />
    <ExampleResult>
      {{ formatSentenceCase(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('scooters are safe. i like scooters.')
</script>
