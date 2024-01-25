<template>
  <div class="bg-white/[3%] rounded-lg p-4 mt-6 border border-white/5 flex gap-3 items-center justify-between">
    <ClientOnly>
      <slot />
    </ClientOnly>

    <div class="text-white/25 font-mono text-sm/none">Result</div>
  </div>
</template>
d
