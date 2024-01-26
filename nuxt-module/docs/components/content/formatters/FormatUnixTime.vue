<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="number" v-model.number="seconds" />
    </ExampleInputs>
    <ExampleResult>
      {{ formatUnixTime(seconds) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const seconds = ref(Math.round(Date.now() / 1000))
</script>
