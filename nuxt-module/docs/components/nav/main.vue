<template>
  <nav>
    <div class="container text-gray-800 dark:text-white mx-auto flex items-center justify-between py-6">
      <NuxtLink to="/" :prefetch="true">
        <LogoFull class="h-6" />
      </NuxtLink>

      <div class="flex items-center gap-6">
        <NavDropdown label="Docs">
          <div v-for="section in docs" class="">
            <NavDropdownItem v-for="link in section.children" :key="link._path" :to="link._path">
              <Icon :name="link.title" class="w-5 h-5 text-white/50" />
              {{ link.title }}
            </NavDropdownItem>
          </div>
        </NavDropdown>
        <NavDropdown label="Links">
          <NavDropdownItem to="/blog">Nuxtjs</NavDropdownItem>
          <NavDropdownItem to="/about">LittleFox</NavDropdownItem>
        </NavDropdown>
      </div>

      <!-- Right -->
      <div>
        <ThemeSwitch />
        <Github />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
  const { data: docs } = await useAsyncData('docs', () => fetchContentNavigation())
</script>
