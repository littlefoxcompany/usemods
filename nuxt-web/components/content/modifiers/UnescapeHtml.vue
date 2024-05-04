<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ unescapeHtml(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('&lt;p&gt;Hello World&lt;/p&gt;')
</script>
