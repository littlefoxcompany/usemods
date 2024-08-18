<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="text" />
    </ExampleInputs>
    <ExampleResult>
      {{ stripWhitespace(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('  Scooters are the past and   our future  ')
</script>
