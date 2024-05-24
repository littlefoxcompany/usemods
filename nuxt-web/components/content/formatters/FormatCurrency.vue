<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Number" type="number" v-model="value" />
      <FormNumber label="Decimals" v-model="decimals" :min="0" :max="20" info="Default: 2" />
      <FormSelect label="Locale" v-model="locale" info="Default: 'en-US'">
        <option v-for="locale in configLocales" :value="locale" :key="locale">{{ locale }}</option>
      </FormSelect>
    </ExampleInputs>
    <ExampleCode :code="`formatCurrency(${value}, { ${isNumber(decimals) ? `decimals: ${decimals},` : ''} locale: ${locale} })`"/>
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
