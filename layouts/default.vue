<template>
  <section class="max-w-screen max-h-screen flex flex-col overflow-hidden">
    <AppHeader />
    <main class="p-3 flex-1 overflow-auto">
      <slot />
    </main>
    <AppFooter />
  </section>
</template>
