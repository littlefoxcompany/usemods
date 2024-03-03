<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="number" v-model="currency" />
      <FormNumber label="Decimals" v-model="decimals" />
      <FormSelect label="Locale" v-model="locale">
        <option v-for="locale in configLocales" :value="locale" :key="locale">{{ locale }}</option>
      </FormSelect>
    </ExampleInputs>
    <ExampleResult>
      {{ formatCurrency(currency, decimals, locale) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const currency = ref(0.000009876)
  const decimals = ref(7)
  const locale = ref('en-US')
</script>
