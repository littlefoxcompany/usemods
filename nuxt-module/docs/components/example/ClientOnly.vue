<template>
  <div class="bg-white/[2%] rounded-lg p-4 mt-6 border border-white/5 flex gap-3 items-center justify-between">
    <ClientOnly>
      <div class="bg-white/[5%] rounded-md px-2 h-7 leading-none flex items-center">
        <slot />
      </div>
    </ClientOnly>

    <div class="text-white/25 font-mono text-sm/none">Result</div>
  </div>
</template>
