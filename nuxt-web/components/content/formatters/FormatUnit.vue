<template>
  <Example>
    <ExampleInputs class="flex flex-col gap-4 items-stretch">
      <div class="flex max-md:flex-col gap-4">
        <FormInput label="Number" type="number" v-model.number="number" step="0.01" />
        <FormNumber label="Decimals" v-model="decimals" info="Default: 0" :min="0" :max="20"/>
        <FormSelect label="Locale" v-model="locale" info="Default: 'en-US'">
          <option v-for="locale in configLocales" :value="locale" :key="locale">{{ locale }}</option>
        </FormSelect>
      </div>
      <div class="flex max-md:flex-col gap-4 justify-stretch items-stretch">
        <FormSelect label="Unit" v-model="unit">
          <option v-for="unit in configUnits" :value="unit" :key="unit">{{ unit }}</option>
        </FormSelect>
        <FormSelect label="Display" v-model="unitDisplay" info="Default: 'long'">
          <option value="long">Long</option>
          <option value="short">Short</option>
        </FormSelect>
      </div>
    </ExampleInputs>

    <ExampleCode :code="`formatUnit(${number}, { unit: ${unit}, ${isNumber(decimals) ? `decimals: ${decimals},` : ''} unitDisplay: ${unitDisplay}, locale: ${locale} })`"/>
    <ExampleResult>
      {{ formatUnit(number, { unit, ...(isNumber(decimals) ? { decimals } : {}), unitDisplay, locale }) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const number = ref(0.12)
const decimals = ref(null)
const locale = ref('en-US')
const unit = ref('acre')
const unitDisplay = ref<'long' | 'short'>('long')
</script>
