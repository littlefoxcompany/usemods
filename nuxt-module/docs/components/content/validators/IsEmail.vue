<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ isEmail(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('dr.turk@sacredheart.com')
</script>
