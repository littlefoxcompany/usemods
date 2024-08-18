<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="text" />
    </ExampleInputs>
    <ExampleResult>
      {{ unescapeHtml(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('&lt;p&gt;Hello World&lt;/p&gt;')
</script>
