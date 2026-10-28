<script setup>
import { RouterLink } from 'vue-router'

const year = new Date().getFullYear()

const nav = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const services = [
  { to: '/services', label: 'Website Design' },
  { to: '/services', label: 'Development' },
  { to: '/services', label: 'Content & Positioning' },
  { to: '/services', label: 'Ongoing Support' },
]
</script>

<template>
  <footer class="border-t border-[var(--color-line)] bg-[var(--color-paper-deep)]">
    <div class="shell py-16 sm:py-20">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-5">
          <div class="flex items-center gap-2.5">
            <img src="/logo.png" alt="Comfibo" class="h-10 w-10 object-contain sm:h-11 sm:w-11" />
            <span class="eyebrow text-[var(--color-ink)]">Comfibo</span>
          </div>
          <p class="mt-6 max-w-sm font-display text-2xl leading-[1.25]">
            An independent studio for web design, development, and care.
          </p>
          <p class="mt-6 max-w-md text-sm leading-6 text-[var(--color-muted)]">
            Building considered websites for businesses that value craft, restraint, and clarity.
          </p>
        </div>

        <div class="lg:col-span-3">
          <p class="eyebrow text-[var(--color-ink)]">Navigate</p>
          <ul class="mt-6 space-y-3.5">
            <li v-for="link in nav" :key="link.to">
              <router-link
                :to="link.to"
                class="text-[0.98rem] text-[var(--color-muted)] transition hover:text-[var(--color-ink)]"
              >
                {{ link.label }}
              </router-link>
            </li>
            <li>
              <router-link
                to="/initiative"
                class="text-[0.98rem] text-[var(--color-accent)] transition hover:text-[var(--color-ink)]"
              >
                Free Website Initiative
              </router-link>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-2">
          <p class="eyebrow text-[var(--color-ink)]">Services</p>
          <ul class="mt-6 space-y-3.5">
            <li v-for="link in services" :key="link.label">
              <router-link
                :to="link.to"
                class="text-[0.98rem] text-[var(--color-muted)] transition hover:text-[var(--color-ink)]"
              >
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-2">
          <p class="eyebrow text-[var(--color-ink)]">Enquiries</p>
          <div class="mt-6 space-y-3.5">
            <a
              class="block text-[0.98rem] text-[var(--color-muted)] transition hover:text-[var(--color-ink)]"
              href="mailto:hello@comfibo.com"
            >
              hello@comfibo.com
            </a>
            <router-link to="/contact" class="link-underlined mt-3 inline-flex">
              <span>Start an enquiry</span>
              <svg class="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>

      <div
        class="mt-14 flex flex-col gap-4 border-t border-[var(--color-line)] pt-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <p class="text-sm text-[var(--color-muted)]">© {{ year }} Comfibo. All rights reserved.</p>
        <p class="text-sm text-[var(--color-muted)]">Designed and built with restraint.</p>
      </div>
    </div>
  </footer>
</template>
