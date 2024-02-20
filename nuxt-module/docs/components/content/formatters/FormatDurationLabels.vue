<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="number" v-model="seconds" />
      <FormSelect label="Format" v-model="labels">
        <option value="short" selected>Short</option>
        <option value="long">Long</option>
      </FormSelect>
      <FormSelect label="Rounding" v-model="rounding">
        <option value="" selected>False</option>
        <option value="true">True</option>
      </FormSelect>
    </ExampleInputs>
    <ExampleResult>
      {{ formatDurationLabels(seconds, labels, Boolean(rounding)) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const seconds = ref(954321)
  const labels = ref('long')
  const rounding = ref('false')
</script>
