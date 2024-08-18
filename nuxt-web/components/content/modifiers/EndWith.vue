<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="text" />
      <FormInput
        v-model="start"
        label="End"
        type="text" />
    </ExampleInputs>
    <ExampleCode :code="`endWith('${value}', '${start}')`" />
    <ExampleResult>
      {{ endWith(value, start) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('https://usemods')
const start = ref('.com')
</script>
