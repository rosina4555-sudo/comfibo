<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const open = ref(false)
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 bg-[var(--color-paper)]/95 backdrop-blur-[1px]">
    <div class="shell">
      <div class="flex h-16 items-center justify-between gap-6 sm:h-20">
        <router-link to="/" class="flex items-center gap-1.5" @click="open = false">
          <img src="/logo.png" alt="Comfibo" class="h-10 w-10 object-contain sm:h-11 sm:w-11" />
          <span class="eyebrow text-[var(--color-ink)]">Comfibo</span>
        </router-link>

        <nav class="hidden items-center gap-10 md:flex">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/services" class="nav-link">Services</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </nav>

        <div class="hidden items-center md:flex">
          <router-link to="/contact" class="link-underlined">
            <span>Enquire</span>
            <svg class="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" />
            </svg>
          </router-link>
        </div>

        <button
          type="button"
          class="inline-flex h-9 w-9 items-center justify-center text-[var(--color-ink)] md:hidden"
          :aria-expanded="open"
          aria-label="Toggle navigation"
          @click="open = !open"
        >
          <svg v-if="!open" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
            <path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg v-else class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
            <path stroke-linecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>
    <div class="mx-auto w-full max-w-[78rem] px-6 lg:px-10">
      <div class="h-px w-full bg-[var(--color-line)]"></div>
    </div>

    <div v-if="open" class="md:hidden">
      <div class="shell py-6">
        <nav class="flex flex-col gap-5">
          <router-link to="/" class="nav-link !pb-0 !text-base" @click="open = false">Home</router-link>
          <router-link to="/services" class="nav-link !pb-0 !text-base" @click="open = false">Services</router-link>
          <router-link to="/about" class="nav-link !pb-0 !text-base" @click="open = false">About</router-link>
          <router-link to="/contact" class="nav-link !pb-0 !text-base" @click="open = false">Contact</router-link>
          <router-link to="/contact" class="link-underlined mt-2" @click="open = false">
            <span>Enquire</span>
            <svg class="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" />
            </svg>
          </router-link>
        </nav>
      </div>
      <div class="mx-auto w-full max-w-[78rem] px-6 lg:px-10">
        <div class="h-px w-full bg-[var(--color-line)]"></div>
      </div>
    </div>
  </header>
</template>
