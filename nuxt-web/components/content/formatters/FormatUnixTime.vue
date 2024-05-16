<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Timestamp" type="number" v-model.number="seconds" />
    </ExampleInputs>
    <ExampleCode :code="`formatUnixTime(${seconds})`" />
    <ExampleResult>
      {{ formatUnixTime(seconds) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const seconds = ref(Math.round(Date.now() / 1000))
</script>
