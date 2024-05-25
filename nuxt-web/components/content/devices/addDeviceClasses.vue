<template>
    <Example>
        <ExampleResult>
        {{ fetchDeviceClasses() }}
        </ExampleResult>
    </Example>
</template>

<script setup lang="ts">
function fetchDeviceClasses() {
  const body = document.querySelector('body')
  const classes = body?.classList.value
  return classes
}
</script>
