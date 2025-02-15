<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model.number="now"
        label="Timestamp"
        type="number" />
    </ExampleInputs>
    <ExampleCode :code="`formatUnixTime(${now})`" />
    <ExampleResult>
      {{ formatUnixTime(now) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const now = ref(Date.now())
</script>
