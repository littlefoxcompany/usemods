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
    <ExampleCode :code="`formatCurrency(${value}, { ${isNumber(decimals) ? `decimals: ${decimals},` : ''} locale: ${locale} })`" />
    <ExampleResult>
      {{ formatCurrency(value, { ...(isNumber(decimals) ? { decimals } : {}), locale }) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref(0.000009876)
const decimals = ref(7)
const locale = ref('en-US')
</script>
