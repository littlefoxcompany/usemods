<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
      <FormInput label="Start" type="text" v-model="start" />
    </ExampleInputs>
    <ExampleCode :code="`startWithout('${value}', '${start}')`" />
    <ExampleResult>
      {{ startWithout(value, start) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('https://usemods.com')
  const start = ref('https://')
</script>
