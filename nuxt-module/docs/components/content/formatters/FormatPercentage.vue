<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="number" v-model.number="percentage" step="0.01" />
      <FormNumber label="Decimals" v-model="decimals" />
      <FormSelect label="Locale" v-model="locale">
        <option v-for="locale in configLocales" :value="locale" :key="locale">{{ locale }}</option>
      </FormSelect>
    </ExampleInputs>
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
