<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
      <FormInput label="Start" type="text" v-model="start" />
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
