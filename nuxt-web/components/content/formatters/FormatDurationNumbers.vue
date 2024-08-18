<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="seconds"
        label="Seconds"
        type="number" />
    </ExampleInputs>
    <ExampleCode :code="`formatDurationNumbers(${seconds})`" />
    <ExampleResult>
      {{ formatDurationNumbers(seconds) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const seconds = ref(987)
</script>
