<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
      <FormNumber label="Count" v-model.number="count" />
    </ExampleInputs>
    <ExampleResult>
      {{ pluralize(value, count) }}
    </ExampleResult>
  </Example>
  <Callout class="mt-8">
    <Icon name="heroicons:chat-bubble-bottom-center-text" class="text-indigo-400 mr-2" />
    Our pluralise function handles unusual plurals for English words (so far).
  </Callout>
</template>

<script setup lang="ts">
  const value = ref('knife')
  const count = ref(2)
</script>
