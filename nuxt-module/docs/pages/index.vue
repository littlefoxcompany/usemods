<template>
  <section class="grow flex flex-col">
    <header class="flex flex-col justify-center items-center py-12 grow">
      <h1 class="2xl:text-9xl text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white text-center max-w-[1200px]">Zippy little utils for your javascript frameworks.</h1>
    </header>
    <section class="shrink">
      <NuxtPicture src="/scooter.png" width="800" class="mx-auto w-fit flex" />
    </section>
  </section>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'public'
  })
</script>
