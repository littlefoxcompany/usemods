<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Dollar Value" type="number" v-model="currency" />
      <FormInput label="Decimal places" type="number" v-model="currencyDecimals" />
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
