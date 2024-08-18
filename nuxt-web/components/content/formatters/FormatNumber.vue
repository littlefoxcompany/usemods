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
        info="Default: 2"
        :min="0"
        :max="20" />
      <FormSelect
        v-model="locale"
        label="Locale"
        info="Default: en-US">
        <option
          v-for="locale in configLocales"
          :key="locale"
          :value="locale">
          {{ locale }}
        </option>
      </FormSelect>
    </ExampleInputs>
    <ExampleCode :code="`formatNumber(${currency}, { ${isNumber(decimals) ? `decimals: ${decimals},` : ''} locale: ${locale} })`" />
    <ExampleResult>
      {{ formatNumber(currency, { ...(isNumber(decimals) ? { decimals } : {}), locale }) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const currency = ref(12345.1242)
const decimals = ref(1)
const locale = ref('en-US')
</script>
