<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Number"
        type="number" />
      <FormNumber
        v-model="decimals"
        label="Decimals"
        :min="0"
        :max="20"
        info="Default: 2" />
      <FormSelectLocale v-model="locale" />
    </ExampleInputs>
    <ExampleCode :code="formattedCode" />
    <ExampleResult>
      {{ formatCurrency(value, { decimals: decimals || decimals === 0 ? decimals : undefined, locale: locale ? locale : undefined }) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref(0.000009876)
const decimals = ref(null)
const locale = ref('')

const formattedCode = computed(() => {
  return generateFormatterCode('formatCurrency', value.value, {
    decimals: decimals.value,
    locale: locale.value,
  })
})
</script>
