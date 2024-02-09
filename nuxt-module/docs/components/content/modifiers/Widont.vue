<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ widont(value) }}
    </ExampleResult>
  </Example>
  <Callout class="mt-8">
    <Icon name="heroicons:information-circle-20-solid" class="text-blue-400 mr-2" />
    Don't forget
    <code>text-wrap: pretty</code>
    works in most modern browsers (sorry Safari).
  </Callout>
</template>

<script setup lang="ts">
  const value = ref('Scooters are the future')
</script>
