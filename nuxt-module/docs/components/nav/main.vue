<template>
  <nav>
    <div class="container mx-auto flex items-center justify-between py-6 text-gray-800 dark:text-white">
      <NuxtLink to="/" :prefetch="true">
        <LogoFull class="h-6 max-md:hidden" />
        <LogoMark class="h-6 md:hidden" />
      </NuxtLink>

      <div class="flex items-center gap-4 self-start md:gap-6">
        <NavDropdown label="Docs">
          <div v-for="section in docs" class="">
            <NavDropdownItem v-for="link in section?.children" :key="link._path" :to="link._path">
              <Icon :name="link.title" class="h-5 w-5 text-white/50" />
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
      <div class="flex items-center gap-2">
        <ThemeSwitch />
        <Github />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
  const docs = inject('content-links')
</script>
