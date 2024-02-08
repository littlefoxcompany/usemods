<template>
  <Example>
    <ExampleInputs class="flex flex-col">
      <FormCode label="Value" v-model="value" />
    </ExampleInputs>
  </Example>
</template>

<script setup lang="ts">
  const value = ref(['s', 'c', 'o', 'o', 't', 'e', 'r', 's'])
</script>
