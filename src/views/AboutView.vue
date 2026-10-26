<script setup>
import { RouterLink } from 'vue-router'

const principles = [
  {
    title: 'Substance over spectacle',
    body: 'Design serves the message. Nothing decorative exists without reason.',
  },
  {
    title: 'Clarity first',
    body: 'Direct language and clean structure remove friction at every turn.',
  },
  {
    title: 'Craft with care',
    body: 'Details are considered, tested, and built to endure.',
  },
  {
    title: 'Quiet reliability',
    body: 'Straightforward communication and support that stays after launch.',
  },
]

const facts = [
  { label: 'Discipline', value: 'Web design & development' },
  { label: 'Structure', value: 'Independent studio' },
  { label: 'Working with', value: 'Established & growing businesses' },
  { label: 'Enquiries', value: 'hello@comfibo.com' },
]
</script>

<template>
  <div>
    <section class="shell pt-16 pb-16 sm:pt-28 sm:pb-20">
      <div class="grid gap-14 lg:grid-cols-12 lg:items-end lg:gap-16">
        <div class="lg:col-span-8">
          <p class="eyebrow text-[var(--color-muted)]">About</p>
          <h1 class="mt-8 text-5xl leading-[1.0] sm:text-6xl lg:text-7xl">
            A studio built on <em class="em">restraint</em>.
          </h1>
          <p class="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
            Comfibo is an independent web studio. We build considered websites for businesses that
            prefer precision over noise.
          </p>
        </div>
        <aside class="border border-[var(--color-line)] bg-[var(--color-paper-deep)] lg:col-span-4">
          <div
            v-for="fact in facts"
            :key="fact.label"
            class="flex items-baseline justify-between gap-6 border-b border-[var(--color-line)] px-8 py-5 last:border-b-0"
          >
            <span class="eyebrow shrink-0 text-[var(--color-muted)]">{{ fact.label }}</span>
            <span class="text-right text-sm text-[var(--color-ink)]">{{ fact.value }}</span>
          </div>
        </aside>
      </div>
    </section>

    <div class="mx-auto w-full max-w-[78rem] px-6 lg:px-10">
      <div class="h-px w-full bg-[var(--color-line)]"></div>
    </div>

    <section class="shell py-20 sm:py-28">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-4">
          <p class="eyebrow text-[var(--color-muted)]">Philosophy</p>
        </div>
        <div class="space-y-8 text-lg leading-9 text-[var(--color-ink-soft)] lg:col-span-8">
          <p>
            A website should not compete for attention. It should clarify. It should make it easy
            for the right person to understand who you are and take the next step.
          </p>
          <p>
            We work slowly on purpose. By limiting scope and focusing on essentials, we keep every
            decision intentional — from structure and typography to performance and care after
            launch.
          </p>
          <p class="font-display text-2xl leading-[1.35] sm:text-3xl">
            The result is a site that feels measured, lasting, and distinctly
            <em class="em">yours</em>.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-[var(--color-paper-deep)]">
      <div class="shell py-20 sm:py-28">
        <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div class="lg:col-span-4">
            <p class="eyebrow text-[var(--color-muted)]">Principles</p>
            <h2 class="mt-6 text-4xl leading-[1.02] sm:text-5xl">What guides the work</h2>
          </div>
          <div class="lg:col-span-8">
            <div class="grid gap-8 sm:grid-cols-2">
              <article
                v-for="principle in principles"
                :key="principle.title"
                class="border border-[var(--color-line)] bg-[var(--color-paper)] p-8"
              >
                <h3 class="text-2xl">{{ principle.title }}</h3>
                <p class="mt-4 leading-7 text-[var(--color-muted)]">{{ principle.body }}</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="shell py-20 sm:py-28">
      <div class="border border-[var(--color-line)] p-8 sm:p-14 lg:flex lg:items-center lg:justify-between lg:gap-12">
        <div class="max-w-2xl">
          <h2 class="text-4xl leading-[1.02] sm:text-5xl">Have a project in mind?</h2>
          <p class="mt-5 leading-7 text-[var(--color-muted)]">
            Tell us a little about it and we'll come back with clear next steps.
          </p>
        </div>
        <div class="mt-8 flex flex-wrap items-center gap-6 lg:mt-0 lg:shrink-0">
          <router-link to="/contact" class="btn btn-solid">
            <span>Start a project</span>
            <svg class="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" />
            </svg>
          </router-link>
          <a href="mailto:hello@comfibo.com" class="link-underlined">hello@comfibo.com</a>
        </div>
      </div>
    </section>
  </div>
</template>
