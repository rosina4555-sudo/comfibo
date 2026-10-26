<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col bg-[var(--color-paper)] text-[var(--color-ink)] antialiased">
    <SiteHeader />
    <main class="flex-1 pt-16 sm:pt-20">
      <router-view />
    </main>
    <SiteFooter />
  </div>
</template>
