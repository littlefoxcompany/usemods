<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Text"
        type="text"
        step="0.01" />
    </ExampleInputs>
    <ExampleCode :code="`formatTitle('${value}')`" />
    <ExampleResult>
      {{ formatTitle(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('Revolutionary scooter trend sweeps the nation. Exploring the surprising surge in "Scooter Mania", but is it more than a fad?')
</script>
