<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="number" v-model="currency" />
      <FormNumber label="Decimals" v-model="currencyDecimals" min="0" />
      <FormInput label="Currency" type="text" v-model="currencySymbol" />
    </ExampleInputs>
    <ExampleResult :result="formatCurrency(currency, currencyDecimals, currencySymbol)" />
  </Example>
</template>

<script setup lang="ts">
  const currency = ref(12345.67)
  const currencyDecimals = ref(2)
  const currencySymbol = ref('USD')
</script>
