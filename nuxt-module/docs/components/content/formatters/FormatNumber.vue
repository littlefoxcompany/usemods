<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="number" v-model="currency" />
      <FormNumber label="Decimals" v-model.number="decimals" />
      <FormSelect label="Locale" v-model="locale">
        <option v-for="locale in configLocales" :value="locale" :key="locale">{{ locale }}</option>
      </FormSelect>
    </ExampleInputs>
    <ExampleResult>
      {{ formatNumber(currency, decimals, locale) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const currency = ref(12345678.1242)
  const decimals = ref(8)
  const locale = ref('en-US')
</script>
