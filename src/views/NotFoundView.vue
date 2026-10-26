<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="shell flex min-h-[calc(100vh-5rem)] flex-col items-start justify-center py-24">
    <p class="eyebrow text-[var(--color-muted)]">404</p>
    <h1 class="mt-6 text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">Page not found.</h1>
    <p class="mt-6 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
      This page doesn't exist or has moved.
    </p>
    <router-link to="/" class="btn btn-outline mt-10">
      <span>Return home</span>
      <svg class="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" />
      </svg>
    </router-link>
  </div>
</template>
