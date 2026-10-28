<script setup>
import { RouterLink } from 'vue-router'
import { initiative, takenSpots } from '../data/initiative.js'
import CountdownTicker from './CountdownTicker.vue'
import SpotsMeter from './SpotsMeter.vue'
</script>

<template>
  <section class="bg-[var(--color-ink)] text-[var(--color-paper)]">
    <div class="shell py-5">
      <div class="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <div class="flex items-center gap-3">
            <span class="h-1.5 w-1.5 shrink-0 bg-[var(--color-gold)]" aria-hidden="true"></span>
            <p class="eyebrow whitespace-nowrap text-[var(--color-paper)]">Free development</p>
          </div>

          <div>
            <p class="max-w-xl font-display text-xl leading-tight sm:text-2xl">
              {{ initiative.promise }}
            </p>
            <div class="mt-3">
              <SpotsMeter :total="initiative.totalSpots" :taken="takenSpots()" tone="dark" />
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <CountdownTicker :deadline="initiative.deadline" size="compact" class="text-[var(--color-paper)]" />

          <router-link to="/initiative" class="btn btn-light shrink-0">
            <span>Apply</span>
            <svg class="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
