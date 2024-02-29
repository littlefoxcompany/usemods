<template>
  <main class="flex flex-col min-h-screen">
    <NavMain class="shrink" />
    <div class="grow flex">
      <section class="grow flex flex-col">
        <header class="flex flex-col justify-center items-center py-12 px-8 grow">
          <h1
            v-html="splitByWords('Zippy little utils for your javascript frameworks.')"
            id="title"
            class="text-5xl text-balance md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 dark:text-white text-center max-w-[1200px]"></h1>

          <div class="flex items-center gap-3 mt-20">
            <NuxtLink to="intro/introduction">
              <Button size="lg" class="group">
                Get Started
                <Icon name="heroicons:arrow-right" class="w-5 h-5 text-white/50 group-hover:translate-x-1 duration-200 transition-all" />
              </Button>
            </NuxtLink>

            <!-- Packages -->
            <div id="packages" class="relative h-11 overflow-visible">
              <button
                type="button"
                v-for="item in packages"
                @click="copy(item)"
                class="items-center max-md:w-full whitespace-nowrap cursor-pointer dark:shadow gap-3 bg-black/[5%] dark:bg-white/[3%] backdrop-blur text-gray-900 dark:text-white/90 font-mono border flex h-11 px-6 border-white/5 rounded-full">
                <Icon name="lucide:terminal" class="w-5 h-5 dark:text-white/50" />
                {{ item }}
              </button>
            </div>
          </div>
        </header>
        <section class="shrink">
          <NuxtPicture src="/big-scooter.png" width="800" class="mx-auto w-fit flex" />
        </section>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
  const packages = ['npm i usemods']

  function copy(text: string) {
    copyToClipboard(text)
  }
</script>

<style scoped>
  :deep(#title) {
    .word {
      @apply overflow-clip inline-flex relative;

      span {
        @apply -translate-y-full opacity-0 leading-[1.1em];
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
    }
  }

  @keyframes fadeUp {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
</style>
