<template>
  <div @mouseover="show = true" @mouseleave="show = false" @click="show = false" class="group relative isolate z-50 flex cursor-pointer">
    <!-- Title -->
    <div class="flex items-center gap-1">
      <span class="text-lg font-semibold">
        {{ label }}
      </span>
      <Icon name="heroicons:chevron-down-16-solid" class="h-4 w-4 text-indigo-400 transition-all group-hover:rotate-180" />
    </div>

    <!-- Links -->
    <div
      class="absolute bottom-0 left-0 z-50 flex translate-y-full rounded-lg border border-black/5 bg-white/80 p-1 shadow-2xl backdrop-blur md:left-1/2 md:-translate-x-1/2 dark:border-white/5 dark:bg-zinc-900/95"
      :class="show ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    label: {
      type: String,
      required: true
    }
  })

  const show = ref(false)
</script>
