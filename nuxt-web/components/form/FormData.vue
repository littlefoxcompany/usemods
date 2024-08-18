<template>
  <pre class="w-full rounded-lg border border-white/5 bg-white/[3%] p-4 font-mono text-sm">{{ props.data }}</pre>
</template>

<script setup lang="ts">
const props = defineProps({
  data: Object || Array,
})
</script>
