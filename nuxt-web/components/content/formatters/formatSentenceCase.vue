<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Text" type="text" v-model="value" />
    </ExampleInputs>
    <ExampleCode :code="`formatSentenceCase(${value})`" />
    <ExampleResult>
      {{ formatSentenceCase(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('scooters are safe. i like scooters.')
</script>
