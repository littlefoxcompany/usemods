<template>
  <Mod>
    <FormInput label="Dollar Value" type="number" v-model="currency" />
    <FormInput label="Decimal places" type="number" v-model="currencyDecimals" />
    <FormInput label="Currency" type="text" v-model="currencySymbol" />
    {{ formatCurrency(currency, currencyDecimals, currencySymbol) }}
  </Mod>
</template>

<script setup lang="ts">
  const currency = ref(9876543)
  const currencyDecimals = ref(2)
  const currencySymbol = ref('USD')
</script>
