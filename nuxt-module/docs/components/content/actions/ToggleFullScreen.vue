<template>
  <Example>
    <ExampleInputs>
      <Button color="secondary" class="w-full" @click="action">Fullscreen</Button>
    </ExampleInputs>
  </Example>
</template>

<script setup lang="ts">
  function action() {
    toggleFullScreen()
  }
</script>
