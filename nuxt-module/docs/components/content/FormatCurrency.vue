<template>
  <Example>
    <ExampleConfig class="justify-end">
      <FormSwitch label="Decimals" v-model="showDecimals" />
      <!-- <FormSwitch label="Customise" v-model="showDecimals" :disabled="!showCustomise" /> -->
    </ExampleConfig>

    <ExampleInputs>
      <FormInput label="Value" type="number" v-model="currency" />
      <FormNumber label="Decimals" v-model="decimalsAmount" :mask="decimalMask" :min="0" :disabled="!showDecimals" />
      <FormInput label="Currency" type="text" v-model="currencySymbol" />
    </ExampleInputs>
    <ExampleResult>
      <!-- {{ formatCurrency(currency, decimals, currencySymbol) }} -->
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const currency = ref(12345.67)
  const showDecimals = ref(false)
  const decimalsAmount = ref()
  const currencySymbol = ref('USD')

  const decimalMask = computed(() => {
    if (decimalsAmount.value) return 'yup'
    if (showDecimals.value) return 'Max'
    if (!showDecimals.value) return 'Off'
  })
</script>
