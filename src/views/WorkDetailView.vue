<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink, useRouter } from 'vue-router'
import { projects, getProject } from '../data/work.js'
import SiteImage from '../components/SiteImage.vue'

const route = useRoute()
const router = useRouter()

const project = computed(() => getProject(route.params.slug))

const next = computed(() => {
  if (!project.value) return null
  const index = projects.findIndex((item) => item.slug === project.value.slug)
  return projects[(index + 1) % projects.length]
})

if (!project.value) {
  router.replace('/404')
}
</script>

<template>
  <div v-if="project">
    <section class="shell pt-16 pb-16 sm:pt-28 sm:pb-20">
      <router-link to="/" class="link-underlined">
        <span>All work</span>
      </router-link>

      <div class="mt-10 grid gap-14 lg:grid-cols-12 lg:items-end lg:gap-16">
        <div class="lg:col-span-8">
          <p class="eyebrow text-[var(--color-accent)]">{{ project.category }}</p>
          <h1 class="mt-6 text-5xl leading-[1.0] sm:text-6xl lg:text-7xl">{{ project.name }}</h1>
          <p class="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
            {{ project.intro }}
          </p>
        </div>

        <aside class="border border-[var(--color-line)] bg-[var(--color-paper-deep)] lg:col-span-4">
          <div
            v-for="row in project.meta"
            :key="row.label"
            class="flex items-baseline justify-between gap-6 border-b border-[var(--color-line)] px-8 py-5 last:border-b-0"
          >
            <span class="eyebrow shrink-0 text-[var(--color-muted)]">{{ row.label }}</span>
            <span class="text-right text-sm text-[var(--color-ink)]">{{ row.value }}</span>
          </div>
        </aside>
      </div>

      <div v-if="project.heroImage" class="mt-14">
        <SiteImage
          :src="project.heroImage.src"
          :alt="project.heroImage.alt"
          :caption="project.heroImage.caption"
          ratio="aspect-[16/9]"
        />
      </div>
    </section>

    <div class="mx-auto w-full max-w-[78rem] px-6 lg:px-10">
      <div class="h-px w-full bg-[var(--color-line)]"></div>
    </div>

    <section class="shell py-16 sm:py-24">
      <div class="grid gap-8 sm:grid-cols-3">
        <div
          v-for="stat in project.stats"
          :key="stat.label"
          class="border-t border-[var(--color-ink)] pt-6"
        >
          <p class="font-display text-4xl leading-none sm:text-5xl">{{ stat.value }}</p>
          <p class="mt-4 max-w-[14rem] text-sm leading-6 text-[var(--color-muted)]">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </section>

    <section class="bg-[var(--color-paper-deep)]">
      <div class="shell py-16 sm:py-24">
        <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div class="lg:col-span-4">
            <p class="eyebrow text-[var(--color-muted)]">The challenge</p>
          </div>
          <div class="lg:col-span-8">
            <p class="text-lg leading-9 text-[var(--color-ink-soft)]">{{ project.challenge }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="shell py-16 sm:py-24">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-4">
          <p class="eyebrow text-[var(--color-muted)]">What we built</p>
          <ul class="mt-8 space-y-3.5">
            <li
              v-for="item in project.deliverables"
              :key="item"
              class="flex items-start gap-3 text-sm leading-6 text-[var(--color-ink-soft)]"
            >
              <span class="mt-2.5 h-px w-4 shrink-0 bg-[var(--color-gold)]"></span>
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="lg:col-span-8">
          <p class="text-lg leading-9 text-[var(--color-ink-soft)]">{{ project.build }}</p>
          <div class="mt-10 flex flex-wrap items-center gap-6">
            <a
              :href="project.href"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-solid"
            >
              <span>Visit site</span>
              <svg class="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section v-if="project.gallery && project.gallery.length" class="shell pb-16 sm:pb-24">
      <div class="border-t border-[var(--color-line)] pt-12">
        <p class="eyebrow text-[var(--color-muted)]">Screens</p>
        <div class="mt-8 grid gap-8 sm:grid-cols-2">
          <SiteImage
            v-for="shot in project.gallery"
            :key="shot.src"
            :src="shot.src"
            :alt="shot.alt"
            :caption="shot.caption"
            ratio="aspect-[4/3]"
          />
        </div>
      </div>
    </section>

    <section class="bg-[var(--color-ink)] text-[var(--color-paper)]">
      <div class="shell py-16 sm:py-24">
        <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div class="lg:col-span-4">
            <p class="eyebrow text-[var(--color-paper)]/60">Outcome</p>
          </div>
          <div class="lg:col-span-8">
            <p class="font-display text-3xl leading-[1.25] sm:text-4xl">{{ project.outcome }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="shell py-16 sm:py-24">
      <div class="border-t border-[var(--color-line)] pt-10">
        <div class="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="eyebrow text-[var(--color-muted)]">Next project</p>
            <p class="mt-5 font-display text-4xl sm:text-5xl">{{ next.name }}</p>
            <p class="mt-3 text-sm text-[var(--color-muted)]">{{ next.category }}</p>
          </div>
          <router-link :to="`/work/${next.slug}`" class="btn btn-outline">
            <span>View project</span>
            <svg class="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" />
            </svg>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
