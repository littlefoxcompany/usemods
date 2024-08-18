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
    </ExampleInputs>
    <ExampleCode :code="`startWith('${value}', '${start}')`" />
    <ExampleResult>
      {{ startWith(value, start) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('usemods.com')
const start = ref('https://')
</script>
