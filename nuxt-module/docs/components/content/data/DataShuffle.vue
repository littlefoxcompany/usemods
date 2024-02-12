<template>
  <Example>
    <ExampleInputs class="flex flex-col">
      <!-- Display the array in a formatted way -->
      <FormData :value="value" @result="result = $event" @input="value = $event" />

      <Button @click="dataShuffle(result)" class="w-fit">Shuffle</Button>
    </ExampleInputs>
    <ExampleResult>
      {{ result }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'

  const result = ref({} || [])
  const value = ref<string[]>(['s', 'c', 'o', 'o', 't', 'e', 'r', 's'])
</script>
