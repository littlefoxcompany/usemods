<template>
  <Example>
    <ExampleInputs class="flex flex-col">
      <FormInput
        v-model="property"
        label="Property" />
      <!-- <FormCode label="Value" v-model="value" /> -->
    </ExampleInputs>
    <ExampleResult>
      {{ dataUnique(value, property) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const property = ref('')
const value = ref(['s', 'c', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 't', 'e', 'r', 's'])
</script>
