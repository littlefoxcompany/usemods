<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="number" v-model="seconds" />
    </ExampleInputs>
    <ExampleResult>
      {{ formatDuration(seconds) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const seconds = ref(987654321)
</script>
