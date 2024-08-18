<template>
  <Example>
    <ExampleInputs class="flex flex-col items-stretch gap-4">
      <div class="flex gap-4 max-md:flex-col">
        <FormInput
          v-model.number="number"
          label="Number"
          type="number"
          step="0.01" />
        <FormNumber
          v-model="decimals"
          label="Decimals"
          info="Default: 0"
          :min="0"
          :max="20" />
        <FormSelectLocale v-model="locale" />
      </div>
      <div class="flex items-stretch justify-stretch gap-4 max-md:flex-col">
        <FormSelect
          v-model="unit"
          label="Unit">
          <option
            v-for="unit in configUnits"
            :key="unit"
            :value="unit">
            {{ unit }}
          </option>
        </FormSelect>
        <FormSelect
          v-model="unitDisplay"
          label="Display"
          info="Default: 'long'">
          <option value="long">
            Long
          </option>
          <option value="short">
            Short
          </option>
        </FormSelect>
      </div>
    </ExampleInputs>

    <ExampleCode :code="`formatUnit(${number}, { unit: ${unit}, ${isNumber(decimals) ? `decimals: ${decimals},` : ''} unitDisplay: ${unitDisplay}, locale: ${locale} })`" />
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
