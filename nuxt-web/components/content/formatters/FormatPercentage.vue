<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model.number="percentage"
        label="Number"
        type="number"
        step="0.01" />
      <FormNumber
        v-model="decimals"
        label="Decimals"
        info="Default: 0"
        :min="0"
        :max="20" />
      <FormSelect
        v-model="locale"
        label="Locale"
        info="Default: 'en-US'">
        <option
          v-for="locale in configLocales"
          :key="locale"
          :value="locale">
          {{ locale }}
        </option>
      </FormSelect>
    </ExampleInputs>
    <ExampleCode :code="`formatPercentage(${percentage}, { ${isNumber(decimals) ? `decimals: ${decimals},` : ''} locale: ${locale} })`" />
    <ExampleResult>
      {{ formatPercentage(percentage, { ...(isNumber(decimals) ? { decimals } : {}), locale }) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const percentage = ref(0.12)
const decimals = ref(0)
const locale = ref('en-US')
</script>
