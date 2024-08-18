<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="text" />
    </ExampleInputs>
    <ExampleResult>
      {{ stripSymbols(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('Sc_oo-ters!!!!')
</script>
