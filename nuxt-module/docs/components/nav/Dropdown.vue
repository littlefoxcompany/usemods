<template>
  <div @mouseover="show = true" @mouseleave="show = false" @click="show = false" class="flex z-50 isolate relative group">
    <!-- Title -->
    <div class="flex items-center gap-1">
      <span class="font-semibold">
        {{ label }}
      </span>
      <Icon name="heroicons:chevron-down-16-solid" class="w-4 h-4 text-indigo-400 group-hover:rotate-180 transition-all" />
    </div>

    <!-- Links -->
    <div
      class="flex z-50 left-1/2 -translate-x-1/2 p-1 absolute bottom-0 translate-y-full bg-white/80 dark:bg-zinc-800/90 shadow-2xl backdrop-blur rounded-lg border border-black/5 dark:border-white/5"
      :class="show ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'">
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
