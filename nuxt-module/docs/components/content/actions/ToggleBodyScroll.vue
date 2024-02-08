<template>
  <Example>
    <ExampleInputs>
      <Button color="secondary" class="w-full" @click="action">Toggle</Button>
    </ExampleInputs>
  </Example>
</template>

<script setup lang="ts">
  function action() {
    toggleBodyScroll()
  }
</script>
