<template>
  <Example>
    <ExampleInputs class="flex flex-col">
      <FormCode label="Value" v-model="value" />
      <Button @click="run" class="w-fit">Shuffle</Button>
    </ExampleInputs>
    <ExampleResult>
      {{ result }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const result = ref()
  const value = ref(['s', 'c', 'o', 'o', 't', 'e', 'r', 's'])

  function run() {
    result.value = dataShuffle(value.value)
  }

  onMounted(() => {
    run()
  })
</script>
