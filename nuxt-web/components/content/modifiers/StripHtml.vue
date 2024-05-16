<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ stripHtml(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('<div>Some <strong>HTML</strong> content</div>')
</script>
