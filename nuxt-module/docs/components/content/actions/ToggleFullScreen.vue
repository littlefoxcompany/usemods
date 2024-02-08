import type { Button } from '#build/components';
<template>
  <Example>
    <ExampleInputs>
      <Button color="secondary" class="w-full" @click="action">Click</Button>
    </ExampleInputs>
  </Example>
</template>

<script setup lang="ts">
  function action() {
    toggleFullScreen()
  }
</script>
