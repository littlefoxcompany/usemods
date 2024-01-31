<template>
  <Example>
    <ExampleInputs class="flex flex-col">
      <!-- <FormInput label="Value" v-model="value" /> -->
    </ExampleInputs>
    <ExampleResult>
      {{ dataReverse(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'])
</script>
