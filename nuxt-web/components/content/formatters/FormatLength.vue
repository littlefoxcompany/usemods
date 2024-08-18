<template>
  <Example>
    <ExampleInputs class="flex flex-col items-stretch gap-4">
      <div class="flex gap-4 max-md:flex-col">
        <FormInput
          v-model.number="number"
          label="Number"
          type="number" />
        <FormNumber
          v-model="decimals"
          label="Decimals"
          :min="0"
          :max="20" />
        <FormSelectLocale v-model="locale" />

        <FormSelect
          v-model="unitDisplay"
          label="Display"
          info="Default: 'short'">
          <option value="long">
            Long
          </option>
          <option value="short">
            Short
          </option>
        </FormSelect>
      </div>

      <div class="flex gap-4 max-md:flex-col">
        <FormSelect
          v-model="inputUnit"
          label="Input Unit"
          info="Default: 'millimeters'">
          <option
            v-for="[unit] in lengthUnitConversions"
            :key="unit"
            :value="unit">
            {{ unit }}
          </option>
        </FormSelect>
        <FormSelect
          v-model="outputUnit"
          label="Output Unit"
          info="Default: 'auto'">
          <option value="auto">
            auto
          </option>
          <option
            v-for="[unit] in lengthUnitConversions"
            :key="unit"
            :value="unit">
            {{ unit }}
          </option>
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
