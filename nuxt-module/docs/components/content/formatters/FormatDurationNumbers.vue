<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="number" v-model="seconds" />
    </ExampleInputs>
    <ExampleResult>
      {{ formatDurationNumbers(seconds) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const seconds = ref(987)
</script>
