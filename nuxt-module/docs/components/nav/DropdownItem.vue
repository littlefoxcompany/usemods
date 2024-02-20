<template>
  <NuxtLink :to="to" class="dark:text-white px-4 flex items-center gap-3 py-2.5 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition-all">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
  const props = defineProps({
    to: {
      type: String,
      required: true
    }
  })
</script>
