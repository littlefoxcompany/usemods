<template>
  <nav>
    <div class="container text-white mx-auto flex items-center justify-between py-6">
      <NuxtLink to="/" :prefetch="true">
        <LogoFull class="h-6" />
      </NuxtLink>

      <div class="flex items-center gap-6">
        <NavDropdown label="Docs">
          <NavDropdownItem to="/docs/introduction">Introduction</NavDropdownItem>
          <NavDropdownItem to="/docs/installation">Installation</NavDropdownItem>
          <NavDropdownItem to="/docs/formatters">Formatters</NavDropdownItem>
        </NavDropdown>
        <NavDropdown label="Links"></NavDropdown>
      </div>

      <!-- Right -->
      <Github />
    </div>
  </nav>
</template>
