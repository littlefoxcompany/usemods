<template>
  <!-- @mouseover="show = true" @mouseleave="show = false" -->
    <div ref="dropdown" @click="show = !show" class="group isolate z-50 flex cursor-pointer">
      <!-- Title -->
      <div class="flex items-center gap-1">
        <span class="text-lg font-semibold">
          {{ label }}
        </span>
        <Icon name="heroicons:chevron-down-16-solid" class="h-4 w-4 text-indigo-400 transition-all"
          :class="show ? 'rotate-180' : 'rotate-0'"
         />
      </div>

      <!-- Links -->
      <Teleport to="body">
      <div
        v-if="show"
        class="absolute top-16 left-1/2 -translate-x-1/2 max-md:w-[90vw] z-50 flex rounded-lg border border-black/5 bg-white/80 p-1 shadow-2xl backdrop-blur transition-all duration-300 dark:border-white/5 dark:bg-zinc-900/95"
        :class="show ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'">
        <slot />
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true
  }
})

const dropdown = ref(null)
const show = ref(false)

onClickOutside(dropdown, () => {
  show.value = false
})
</script>
