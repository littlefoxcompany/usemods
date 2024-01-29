<template>
  <Example>
    <ExampleInputs>
      <FormNumber v-model="length" label="Length" max="100" />
    </ExampleInputs>
    <ExampleResult>
      {{ generateShortId(length) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const length = ref(36)
</script>
