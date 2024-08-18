<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="text" />
    </ExampleInputs>
    <ExampleResult>
      {{ stripPunctuation(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('Scooters!!!!')
</script>
