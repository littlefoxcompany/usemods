<template>
  <nav>
    <div class="container text-white mx-auto flex items-center justify-between py-6">
      <NuxtLink to="/" :prefetch="true">
        <LogoFull class="h-6" />
      </NuxtLink>

      <div class="flex items-center gap-6">
        <NavDropdown label="Docs" class="flex">
          <div v-for="section in docs" class="flex flex-col">
            <NavDropdownItem v-for="item in section.children" :key="item._path" :to="item._path">
              {{ item.title }}
            </NavDropdownItem>
          </div>
        </NavDropdown>
        <NavDropdown label="Links"></NavDropdown>
      </div>

      <!-- Right -->
      <Github />
    </div>
  </nav>
</template>

<script setup lang="ts">
  const { data: docs } = await useAsyncData('docs', () => fetchContentNavigation())
</script>
