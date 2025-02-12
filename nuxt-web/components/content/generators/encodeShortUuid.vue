<template>
  <Example>
    <ExampleInputs>
      <FormInput v-model="uuid" label="UUID" />
    </ExampleInputs>
    <ExampleCode :code="`encodeShortUuid(${uuid})`" />
    <ExampleResult>
      {{ encodeShortUuid(uuid) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const uuid = ref('2ededb11-c6ad-4af9-bcd6-30896a32c8b4')
</script>
