<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="number" v-model="seconds" />
      <FormSelect label="Format" v-model="labels">
        <option value="short" selected>Short</option>
        <option value="long">Long</option>
      </FormSelect>
    </ExampleInputs>
    <ExampleResult>
      {{ formatDurationLabels(seconds, labels) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const seconds = ref(987654321)
  const labels = ref('short')
</script>
