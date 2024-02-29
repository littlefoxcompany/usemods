<template>
  <div class="flex">
    <a href="https://github.com/LittleFoxCompany/usemods" class="border border-gray-200 dark:border-white/20 rounded-lg px-2 h-8 flex items-center gap-2">
      <Icon name="fa6-brands:github" class="w-4 h-4 dark:text-white" />
      <span v-if="data?.stargazers_count" class="text-sm">
        {{ formatNumber(data?.stargazers_count, false) }}
      </span>
    </a>
  </div>
</template>

<script setup lang="ts">
  const data = await useFetch('https://api.github.com/repos/LittleFoxCompany/usemods', {
    method: 'GET',
    immediate: true
  })
</script>
