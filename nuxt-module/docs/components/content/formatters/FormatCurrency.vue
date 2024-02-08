<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="number" v-model="currency" />
      <FormNumber label="Decimals" v-model="decimalsAmount" :mask="decimalMask" :min="0" :disabled="!showDecimals">
        <template #label>
          <FormSwitch label="Enable" v-model="showDecimals" />
        </template>
      </FormNumber>
      <FormInput label="Currency" type="text" v-model="currencySymbol" />
    </ExampleInputs>
    <ExampleResult>
      {{ formatCurrency(currency, decimals, currencySymbol) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const currency = ref(12345.67)
  const showDecimals = ref(false)
  const decimalsAmount = ref()
  const currencySymbol = ref('USD')
  1
  const decimalMask = computed(() => {
    if (decimalsAmount.value) return Number(decimalsAmount.value)
    if (showDecimals.value) return 'Max'
    if (!showDecimals.value) return 'Off'
  })

  const decimals = computed(() => {
    if (!showDecimals.value) return false
    if (decimalsAmount.value) return Number(decimalsAmount.value)
    if (showDecimals.value) return true
  })
</script>
