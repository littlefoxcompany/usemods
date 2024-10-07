<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="currency"
        label="Number"
        type="number" />
      <FormNumber
        v-model="decimals"
        label="Decimals"
        :min="0"
        :max="20" />
      <FormSelectLocale v-model="locale" />
    </ExampleInputs>
    <ExampleCode :code="formattedCode" />
    <ExampleResult>
      {{ formatNumber(currency, { decimals: decimals || decimals === 0 ? decimals : undefined, locale: locale ? locale : undefined }) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const currency = ref(12345.1242)
const decimals = ref<number | null>(null)
const locale = ref('')

const formattedCode = computed(() => {
  return generateFormatterCode('formatNumber', currency.value, {
    decimals: decimals.value,
    locale: locale.value,
  })
})
</script>
