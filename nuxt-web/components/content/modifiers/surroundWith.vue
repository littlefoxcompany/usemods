<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="text" />
      <FormInput
        v-model="start"
        label="Start"
        type="text" />
      <FormInput
        v-model="end"
        label="End"
        type="text" />
    </ExampleInputs>
    <ExampleCode :code="`surroundWith('${value}', '${start}', '${end}')`" />
    <ExampleResult>
      {{ surroundWith(value, start, end) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('usemods')
const start = ref('https://')
const end = ref('.com')
</script>
