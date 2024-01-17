<template>
  <div @mouseover="show = true" @mouseleave="show = false" @click="show = false" class="flex relative">
    <div class="flex items-center gap-1">
      <span class="font-semibold">
        {{ label }}
      </span>
      <Icon name="heroicons:chevron-down-16-solid" class="w-4 h-4 text-indigo-400" />
    </div>

    <div
      class="flex left-1/2 -translate-x-1/2 flex-col p-1 absolute bottom-0 translate-y-full bg-zinc-800 rounded-lg border border-white/5"
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
