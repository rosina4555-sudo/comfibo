<script setup>
import { RouterLink } from 'vue-router'

const services = [
  {
    title: 'Website Design',
    body: 'Layouts built on proportion, typography, and structure — shaped around the character of your business, never from a template.',
    points: ['Information architecture', 'Type and layout systems', 'Brand alignment', 'Conversion-focused structure'],
  },
  {
    title: 'Website Development',
    body: 'Hand-built pages with clean markup, careful responsive behaviour, and fast load times across every device.',
    points: ['Responsive build', 'Semantic structure', 'Cross-browser testing', 'Performance discipline'],
  },
  {
    title: 'Content & Positioning',
    body: 'Clear page hierarchy and direct language, so the right customers find you and understand what you offer.',
    points: ['Page hierarchy', 'Copy refinement', 'Metadata and headings', 'Local search setup'],
  },
  {
    title: 'Ongoing Support',
    body: 'Thorough checks before launch, and direct, no-fuss support once the site is live.',
    points: ['Testing across devices', 'Post-launch support', 'Content edits', 'Pragmatic advice'],
  },
]

const inclusions = [
  'Responsive across phones, tablets, and desktop',
  'Fast load times and clean, semantic markup',
  'Basic on-page search structure',
  'A handover walkthrough so you know how it works',
]

const priceFactors = [
  'Number of pages and templates',
  'Complexity — forms, payments, logins, catalogues',
  'Whether content and photography are ready',
  'How tight the timeline is',
]

const quoteIncludes = [
  'Design and build',
  'Testing across devices and browsers',
  'Launch and a handover walkthrough',
  'Post-launch support window',
]
</script>

<template>
  <div>
    <section class="shell pt-16 pb-16 sm:pt-28 sm:pb-20">
      <div class="grid gap-14 lg:grid-cols-12 lg:items-end lg:gap-16">
        <div class="lg:col-span-8">
          <p class="eyebrow text-[var(--color-muted)]">Services</p>
          <h1 class="mt-8 text-5xl leading-[1.0] sm:text-6xl lg:text-7xl">
            Four disciplines, handled <em class="em">properly</em>.
          </h1>
          <p class="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
            Focused on the work that actually matters for a business website — from first
            conversation to launch and beyond.
          </p>
        </div>
        <aside class="border border-[var(--color-line)] bg-[var(--color-paper-deep)] p-8 lg:col-span-4">
          <p class="eyebrow text-[var(--color-muted)]">Included</p>
          <ul class="mt-6 space-y-3">
            <li
              v-for="item in inclusions"
              :key="item"
              class="flex items-start gap-3 text-sm leading-6 text-[var(--color-ink-soft)]"
            >
              <span class="mt-2.5 h-px w-4 shrink-0 bg-[var(--color-gold)]"></span>
              {{ item }}
            </li>
          </ul>
        </aside>
      </div>
    </section>

    <div class="mx-auto w-full max-w-[78rem] px-6 lg:px-10">
      <div class="h-px w-full bg-[var(--color-line)]"></div>
    </div>

    <section class="shell py-16 sm:py-24">
      <div class="grid gap-8 sm:grid-cols-2">
        <article
          v-for="service in services"
          :key="service.title"
          class="border border-[var(--color-line)] p-8 sm:p-10"
        >
          <h2 class="text-3xl sm:text-4xl">{{ service.title }}</h2>
          <p class="mt-5 max-w-md leading-7 text-[var(--color-muted)]">{{ service.body }}</p>
          <ul class="mt-8 space-y-2.5 border-t border-[var(--color-line)] pt-6">
            <li
              v-for="point in service.points"
              :key="point"
              class="flex items-center gap-3 text-sm text-[var(--color-ink-soft)]"
            >
              <span class="h-px w-4 shrink-0 bg-[var(--color-gold)]"></span>
              {{ point }}
            </li>
          </ul>
        </article>
      </div>
    </section>

    <!-- How we quote -->
    <section class="bg-[var(--color-paper-deep)]">
      <div class="shell py-16 sm:py-24">
        <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div class="lg:col-span-4">
            <p class="eyebrow text-[var(--color-muted)]">Engagement</p>
            <h2 class="mt-6 text-4xl leading-[1.02] sm:text-5xl">How we quote</h2>
            <p class="mt-6 max-w-sm leading-7 text-[var(--color-muted)]">
              Fixed price, agreed before work begins. No hourly surprises and no moving targets.
            </p>
          </div>

          <div class="lg:col-span-8">
            <div class="grid gap-8 sm:grid-cols-3">
              <article class="border-t border-[var(--color-ink)] pt-6">
                <p class="font-display text-4xl leading-none text-[var(--color-gold)]">I</p>
                <h3 class="mt-5 text-2xl">Scoping</h3>
                <p class="mt-3 leading-7 text-[var(--color-muted)]">
                  We discuss the business, the pages, and what the site must do. Usually one
                  conversation.
                </p>
              </article>
              <article class="border-t border-[var(--color-ink)] pt-6">
                <p class="font-display text-4xl leading-none text-[var(--color-gold)]">II</p>
                <h3 class="mt-5 text-2xl">Written quote</h3>
                <p class="mt-3 leading-7 text-[var(--color-muted)]">
                  You receive a fixed price, a clear scope, and a timeline. What is included is
                  stated plainly.
                </p>
              </article>
              <article class="border-t border-[var(--color-ink)] pt-6">
                <p class="font-display text-4xl leading-none text-[var(--color-gold)]">III</p>
                <h3 class="mt-5 text-2xl">Build</h3>
                <p class="mt-3 leading-7 text-[var(--color-muted)]">
                  Once approved, the price holds. If the scope changes, we agree a revised figure
                  before continuing.
                </p>
              </article>
            </div>

            <div class="mt-12 grid gap-8 border-t border-[var(--color-line)] pt-10 sm:grid-cols-2">
              <div>
                <p class="eyebrow text-[var(--color-ink)]">What shapes the price</p>
                <ul class="mt-5 space-y-2.5">
                  <li
                    v-for="factor in priceFactors"
                    :key="factor"
                    class="flex items-start gap-3 text-sm leading-6 text-[var(--color-ink-soft)]"
                  >
                    <span class="mt-2.5 h-px w-4 shrink-0 bg-[var(--color-gold)]"></span>
                    {{ factor }}
                  </li>
                </ul>
              </div>
              <div>
                <p class="eyebrow text-[var(--color-ink)]">Always included</p>
                <ul class="mt-5 space-y-2.5">
                  <li
                    v-for="item in quoteIncludes"
                    :key="item"
                    class="flex items-start gap-3 text-sm leading-6 text-[var(--color-ink-soft)]"
                  >
                    <span class="mt-2.5 h-px w-4 shrink-0 bg-[var(--color-gold)]"></span>
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>

            <div class="mt-12 flex flex-wrap items-center gap-6 border-t border-[var(--color-line)] pt-10">
              <router-link to="/contact" class="btn btn-solid">
                <span>Request a quote</span>
                <svg class="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" />
                </svg>
              </router-link>
              <p class="text-sm text-[var(--color-muted)]">
                Quotes are free and carry no obligation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[var(--color-ink)] text-[var(--color-paper)]">
      <div class="shell py-16 sm:py-28">
        <div class="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div class="lg:col-span-8">
            <p class="eyebrow text-[var(--color-paper)]/60">Next step</p>
            <h2 class="mt-6 text-4xl leading-[1.02] sm:text-5xl lg:text-6xl">
              Tell us what you need.
            </h2>
            <p class="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-paper)]/70">
              A short description of your business is enough to start. We'll outline a clear way
              forward.
            </p>
          </div>
          <div class="lg:col-span-4 lg:flex lg:justify-end">
            <router-link to="/contact" class="btn btn-light">
              <span>Start a project</span>
              <svg class="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
