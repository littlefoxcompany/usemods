<template>
  <Example>
    <ExampleInputs>
      <FormSelect
        v-model="format"
        label="Format">
        <option value="array">
          Array
        </option>
        <option value="string">
          String
        </option>
      </FormSelect>
    </ExampleInputs>
    <ExampleResult>{{ detectUrlPath(format) }}</ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const format = ref<'array' | 'string'>('array')
</script>
