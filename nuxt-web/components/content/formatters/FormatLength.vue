<template>
    <Example>
      <ExampleInputs class="flex flex-col gap-4 items-stretch">
        <div class="flex max-md:flex-col gap-4">
          <FormInput label="Number" type="number" v-model.number="number" />
          <FormNumber label="Decimals" v-model="decimals" :min="0" :max="20"/>
          <FormSelect label="Locale" v-model="locale" info="Default: 'en-US'">
              <option value="undefined">Default</option>
            <option v-for="locale in configLocales" :value="locale" :key="locale">{{ locale }}</option>
          </FormSelect>
          
          <FormSelect label="Display" v-model="unitDisplay" info="Default: 'short'">
            <option value="long">Long</option>
            <option value="short">Short</option>
          </FormSelect>
        </div>
  
        <div class="flex max-md:flex-col gap-4">
          <FormSelect label="Input Unit" v-model="inputUnit" info="Default: 'millimeters'">
            <option v-for="[unit] in lengthUnitConversions" :value="unit" :key="unit">{{ unit }}</option>
          </FormSelect>
          <FormSelect label="Output Unit" v-model="outputUnit" info="Default: 'auto'">
            <option value="auto">auto</option>
            <option v-for="[unit] in lengthUnitConversions" :value="unit" :key="unit">{{ unit }}</option>
          </FormSelect>
        </div>
      </ExampleInputs>
  
      <ExampleCode :code="`formatLength(${number}, { inputUnit: ${inputUnit}, ${outputUnit !== 'auto' ? `outputUnit: ${outputUnit},` : ''} ${isNumber(decimals) ? `decimals: ${decimals},` : ''} unitDisplay: ${unitDisplay}, ${locale !== undefined ? `locale: ${locale},` : ''} })`" />
      <ExampleResult>
        {{ formatLength(number, { inputUnit, outputUnit, ...(isNumber(decimals) ? { decimals } : {}), unitDisplay, locale }) }}
      </ExampleResult>
    </Example>
  </template>
    
<script setup lang="ts">
const number = ref(1500)
const inputUnit = ref('millimeter')
const outputUnit = ref('auto')
const decimals = ref(null)
const locale = ref(undefined)
const unitDisplay = ref<'short' | 'long'>('short')
</script>