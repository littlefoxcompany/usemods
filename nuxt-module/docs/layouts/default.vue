<template>
  <main>
    <!-- Navigation -->
    <NavMain />

    <!-- Body -->
    <div class="container mx-auto flex min-h-screen py-12">
      <!-- Sidenav -->
      <nav class="w-full max-w-[200px] p-4">
        <NuxtLink>Here</NuxtLink>
      </nav>

      <!-- Content -->
      <div class="min-h-screen">
        <NuxtPage class="w-full" />
      </div>
    </div>
  </main>
</template>
