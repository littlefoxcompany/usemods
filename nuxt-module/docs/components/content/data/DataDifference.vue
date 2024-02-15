<template>
  <Example>
    <ExampleInputs class="flex flex-col">
      <FormData :data="value" />
      <FormData :data="valueTwo" />
    </ExampleInputs>
    <ExampleResult>
      {{ dataDifference(value, valueTwo) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ['s', 'c', 'o', 'o', 't', 'e', 'r']
  const valueTwo = ['s', 'c', 'o', 'o', 't', 'e', 'r']
</script>
