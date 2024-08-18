<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model.number="seconds"
        label="Timestamp"
        type="number" />
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
