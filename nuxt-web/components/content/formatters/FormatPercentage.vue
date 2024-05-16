<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Number" type="number" v-model.number="percentage" step="0.01" />
      <FormNumber label="Decimals" v-model="decimals" info="Default: 0" />
      <FormSelect label="Locale" v-model="locale" info="Default: 'en-US'">
        <option v-for="locale in configLocales" :value="locale" :key="locale">{{ locale }}</option>
      </FormSelect>
    </ExampleInputs>
    <ExampleCode :code="`formatPercentage(${percentage}, { decimals: ${decimals}, locale: ${locale} })`"/>
    <ExampleResult>
      {{ formatPercentage(percentage, { decimals, locale }) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const percentage = ref(0.12)
  const decimals = ref(0)
  const locale = ref('en-US')
</script>
