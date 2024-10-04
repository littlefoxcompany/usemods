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
      <FormSelectLocale v-model="locale" />
    </ExampleInputs>
    <ExampleCode :code="formattedCode" />
    <ExampleResult>
      {{ formatPercentage(percentage, { decimals: decimals || decimals === 0 ? decimals : undefined, locale: locale ? locale : undefined }) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const percentage = ref(0.12)
const decimals = ref(null)
const locale = ref('')

const formattedCode = computed(() => {
  return generateFormatterCode('formatPercentage', percentage.value, {
    decimals: decimals.value,
    locale: locale.value,
  })
})
</script>
