<template>
  <nav>
    <div class="container mx-auto flex items-center justify-between p-4">
      <NuxtLink to="/">Home</NuxtLink>

      <div class="flex">
        <a href="http://littlefox.studio" class="border border-white/10 rounded-lg px-2 py-1 flex items-center gap-2">
          <Icon name="fa6-brands:github" class="w-4 h-4 text-white" />
          {{ starCount }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
  const starCount = ref()

  const fetchStarCount = async () => {
    const res = await fetch('https://api.github.com/repos/antfu/vite-plugin-components')
    const data = await res.json()
    starCount.value = data.stargazers_count
  }

  onMounted(() => {
    fetchStarCount()
  })
</script>
