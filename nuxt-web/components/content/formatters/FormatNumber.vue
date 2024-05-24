<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Number" type="number" v-model="currency"/>
      <FormNumber label="Decimals" v-model="decimals" info="Default: 2" :min="0" :max="20"/>
      <FormSelect label="Locale" v-model="locale" info="Default: en-US">
        <option v-for="locale in configLocales" :value="locale" :key="locale">{{ locale }}</option>
      </FormSelect>
    </ExampleInputs>
    <ExampleCode :code="`formatNumber(${currency}, { ${isNumber(decimals) ? `decimals: ${decimals},` : ''} locale: ${locale} })`"/>
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
