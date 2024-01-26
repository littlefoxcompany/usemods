<template>
  <div class="p-5 flex bg-white/[3%] justify-between items-center gap-6">
    <div class="flex gap-3 items-start">
      <Icon name="ph:equals-bold" class="text-white/20 shrink-0 w-3 mt-1.5" />

      <div class="text-xl font-semibold">
        <slot />
      </div>
    </div>

    <div class="text-white/25 font-mono text-sm/none">Result</div>
  </div>
</template>

<script setup lang="ts"></script>
