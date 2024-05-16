<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Seconds" type="number" v-model="seconds" />
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
