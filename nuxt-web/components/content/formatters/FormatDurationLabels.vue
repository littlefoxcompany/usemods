<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Seconds" type="number" v-model="seconds" />
      <FormSelect label="Format" v-model="labels" info="Default: 'short'">
        <option value="short" selected>Short</option>
        <option value="long">Long</option>
      </FormSelect>
      <FormSelect label="Rounding" v-model="round" info="Default: false">
        <option :value="false">False</option>
        <option :value="true">True</option>
      </FormSelect>
    </ExampleInputs>
    <ExampleCode :code="`formatDurationLabels(${seconds}, { labels: '${labels}', round: ${round} })`" />
    <ExampleResult>
      {{ formatDurationLabels(seconds, { labels, round }) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const seconds = ref(954321)
  const labels = ref<'long' | 'short'>('long')
  const round = ref(false)
</script>
