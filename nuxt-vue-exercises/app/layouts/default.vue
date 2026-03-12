<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <main class="flex-1 bg-purple-400">
      <slot />
    </main>
    <FooterComponent />
  </div>
</template>