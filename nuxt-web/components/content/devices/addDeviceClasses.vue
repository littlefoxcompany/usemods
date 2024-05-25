<template>
    <Example>
        <ExampleResult>
        {{ fetchDeviceClasses() }}
        </ExampleResult>
    </Example>
</template>

<script setup lang="ts">

// write a function that extracts teh classes from the body

function fetchDeviceClasses() {

  const body = document.querySelector('body')
  const classes = body?.classList.value
  return classes
}
</script>
