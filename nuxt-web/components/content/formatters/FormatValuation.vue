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
        info="Default: 2" />
      <FormSelectLocale v-model="locale" />
    </ExampleInputs>
    <ExampleCode :code="`formatValuation(${currency}, { decimals: ${decimals}, locale: ${locale} })`" />
    <ExampleResult>
      {{ formatValuation(currency, { decimals, locale }) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const currency = ref(12345678910)
const decimals = ref(0)
const locale = ref('en-US')
</script>
