<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Number" type="number" v-model="currency" />
      <FormNumber label="Decimals" v-model="decimals" info="Default: 2" />
      <FormSelect label="Locale" v-model="locale" info="Default: 'en-US'">
        <option v-for="locale in configLocales" :value="locale" :key="locale">{{ locale }}</option>
      </FormSelect>
    </ExampleInputs>
    <ExampleCode :code="`formatValuation(${currency}, { decimals: ${decimals}, locale: ${locale} })`" />
    <ExampleResult>
      {{ formatValuation(currency, { decimals, locale }) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const currency = ref(12345678910)
  const decimals = ref(1)
  const locale = ref('en-US')
</script>
