<template>
  <Example>
    <ExampleResult>
      {{ result }}
    </ExampleResult>
  </Example>
  <Callout class="mt-8">
    <Icon name="heroicons:information-circle-20-solid" class="text-indigo-400 mr-2" />
    We're working on making this reactive.
  </Callout>
</template>

<script setup lang="ts">
  const result = ref(false)

  function updateResult() {
    result.value = detectActiveBrowser()
  }

  onMounted(() => {
    updateResult()
  })

  onUnmounted(() => {})
</script>
