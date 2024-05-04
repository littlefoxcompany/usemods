<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ stripSymbols(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('Sc_oo-ters!!!!')
</script>
