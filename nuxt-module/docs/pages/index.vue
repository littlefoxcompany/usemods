<template>
  <section class="grow flex flex-col">
    <header class="flex flex-col justify-center items-center py-12 grow">
      <h1 ref="test"></h1>
      <h1
        v-html="splitByWords('Zippy little utils for your javascript frameworks.')"
        id="title"
        class="2xl:text-9xl text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white text-center max-w-[1200px]"></h1>
    </header>
    <section class="shrink">
      <NuxtPicture src="/scooter.png" width="800" class="mx-auto w-fit flex" />
    </section>
  </section>
</template>

<script setup lang="ts">
  definePageMeta({ layout: 'public' })
</script>

<style scoped>
  :deep(#title) {
    .word {
      @apply overflow-clip inline-flex relative;

      span {
        @apply translate-y-full leading-[1.1em];
        animation: fadeUp 0.5s ease-in-out forwards;

        &.word-1 {
          animation-delay: 0.1s;
        }

        &.word-2 {
          animation-delay: 0.2s;
        }

        &.word-3 {
          animation-delay: 0.3s;
        }

        &.word-4 {
          animation-delay: 0.4s;
        }

        &.word-5 {
          animation-delay: 0.5s;
        }

        &.word-6 {
          animation-delay: 0.6s;
        }

        &.word-7 {
          animation-delay: 0.7s;
        }
      }

      /* Add more classes and corresponding animation delays as needed */
    }
  }

  @keyframes fadeUp {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
