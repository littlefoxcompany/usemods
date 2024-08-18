<template>
  <Example>
    <ExampleInputs>
      <FormNumber
        v-model="length"
        label="Length"
        :min="1" />
      <FormSelect
        v-model="type"
        label="Type">
        <option value="words">
          Words
        </option>
        <option value="sentences">
          Sentences
        </option>
        <option value="paragraphs">
          Paragraphs
        </option>
      </FormSelect>
    </ExampleInputs>
    <ExampleCode :code="`generateLoremIpsum(${length}, { format: '${type}' })`" />
    <ExampleResult>
      {{ generateLoremIpsum(length, { format: type as 'words' | 'sentences' | 'paragraphs' }) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const length = ref(2)
const type = ref('words')
</script>
