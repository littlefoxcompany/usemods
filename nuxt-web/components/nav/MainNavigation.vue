<template>
  <nav>
    <div class="container mx-auto grid grid-cols-3 items-center justify-between py-6 text-gray-800 dark:text-white">      
      <!-- Logo -->
      <NuxtLink alt="Home" to="/" aria-label="Home" prefetch>
        <LogoFull class="h-6 max-md:hidden" />
        <LogoMark class="h-6 md:hidden" />
      </NuxtLink>

      <!-- Links -->
      <div class="flex grow items-center gap-4 justify-end md:justify-center md:gap-6">
        <NavDropdown label="Docs">
          <div class="flex w-full items-stretch gap-3 divide-x divide-white/5 p-1">
            <div class="flex shrink flex-col">
              <NavDropdownItem v-for="link in introLinks" :key="link.id" :to="link._path">
                <Icon :name="link.title" class="mt-1 h-5 w-5 shrink-0 text-white/50" />
                <div>
                  {{ link.title }}
                  <div class="whitespace-nowrap text-xs text-gray-500 dark:text-white/50">{{ link.lead }}</div>
                </div>
              </NavDropdownItem>
            </div>
          </div>
        </NavDropdown>
        
        <NavDropdown label="Functions">
          <div class="flex w-full items-stretch gap-3 divide-x divide-white/5 p-1">
            <div class="flex w-fit md:w-[720px] flex-col">
              <div class="grid grid-cols-2 md:grid-cols-3">
                <NavDropdownItem v-for="link in docLinks" :key="link._path" :to="link._path">
                  <Icon :name="link.title" class="mt-1 h-5 w-5 shrink-0 text-white/50" />
                  <div>
                    {{ link.title }}
                    <div class="max-md:hidden whitespace-nowrap text-xs text-gray-500 dark:text-white/50">{{ link.lead }}</div>
                  </div>
                </NavDropdownItem>
              </div>
            </div>
          </div>
        </NavDropdown>
      </div>

      <!-- Actions -->
      <div class="flex items-center justify-end gap-2">
        <ThemeSwitch />
        <Github />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const introLinks = inject('intro-links')
const docLinks = inject('doc-links')
</script>
