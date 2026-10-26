<script setup>
import { onMounted, reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { projects, testimonials } from '../data/work.js'
import SiteImage from '../components/SiteImage.vue'

const broken = reactive({})

function markBroken(src) {
  broken[src] = true
}

const heroVideo = ref(null)

onMounted(() => {
  const el = heroVideo.value
  if (!el) return

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) return

  el.muted = true
  el.defaultMuted = true
  el.volume = 0
  const attempt = el.play()
  if (attempt && typeof attempt.catch === 'function') {
    attempt.catch(() => {})
  }
})

const capabilities = [
  {
    title: 'Website Design',
    body: 'Layouts built on proportion and typography, shaped to the character of your business.',
    points: ['Information architecture', 'Type and layout systems', 'Brand alignment'],
  },
  {
    title: 'Website Development',
    body: 'Hand-built pages with clean markup, careful responsive behaviour, and fast load times.',
    points: ['Responsive build', 'Semantic structure', 'Performance discipline'],
  },
  {
    title: 'Search & Structure',
    body: 'Clear page hierarchy and sensible markup so the site is found and understood.',
    points: ['Page hierarchy', 'Metadata and headings', 'Local search setup'],
  },
  {
    title: 'Launch & Support',
    body: 'Thorough checks before launch, and direct support once the site is live.',
    points: ['Testing across devices', 'Post-launch support', 'Ongoing edits'],
  },
]

const process = [
  {
    numeral: 'I',
    title: 'Consultation',
    body: 'We begin with a conversation about your business, your customers, and what the site needs to achieve.',
  },
  {
    numeral: 'II',
    title: 'Structure',
    body: 'Pages, hierarchy, and message are settled before design begins. Nothing decorative is added.',
  },
  {
    numeral: 'III',
    title: 'Design & Build',
    body: 'Type, layout, and code are developed together, reviewed with you at each stage.',
  },
  {
    numeral: 'IV',
    title: 'Launch',
    body: 'Careful testing, then a clean launch with support available as the site settles in.',
  },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <img
        src="/hero-poster.jpg"
        alt=""
        aria-hidden="true"
        class="hero-media hero-still"
      />
      <video
        ref="heroVideo"
        class="hero-media hero-video"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        poster="/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div class="hero-scrim" aria-hidden="true"></div>

      <div class="shell relative pt-16 pb-20 sm:pt-28 sm:pb-28">
        <div class="grid gap-14 lg:grid-cols-12 lg:items-end lg:gap-16">
        <div class="lg:col-span-8">
          <p class="eyebrow text-[var(--color-muted)]">Web design and development</p>
          <h1 class="mt-8 text-5xl leading-[1.0] sm:text-6xl lg:text-7xl">
            Websites built to carry <em class="em">weight</em>.
          </h1>
          <p class="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
            Comfibo designs and builds classic, considered websites for businesses that would rather
            look established than look fashionable.
          </p>
          <div class="mt-10 flex flex-wrap items-center gap-6">
            <router-link to="/contact" class="btn btn-solid">
              <span>Start a project</span>
              <svg class="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" />
              </svg>
            </router-link>
            <router-link to="/services" class="link-underlined">
              <span>View services</span>
            </router-link>
          </div>
        </div>

        <aside class="border border-[var(--color-line)] bg-[var(--color-paper-deep)] p-8 lg:col-span-4">
          <p class="eyebrow text-[var(--color-muted)]">Studio</p>
          <p class="mt-6 font-display text-3xl leading-[1.15]">
            An independent practice for web design, development, and care.
          </p>
          <p class="mt-6 text-sm leading-6 text-[var(--color-muted)]">
            Small by design. Every project is handled directly.
          </p>
        </aside>
        </div>
      </div>
    </section>

    <div class="mx-auto w-full max-w-[78rem] px-6 lg:px-10">
      <div class="h-px w-full bg-[var(--color-line)]"></div>
    </div>

    <!-- Statement -->
    <section class="shell py-20 sm:py-28">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-4">
          <p class="eyebrow text-[var(--color-muted)]">Position</p>
        </div>
        <div class="lg:col-span-8">
          <p class="font-display text-3xl leading-[1.25] sm:text-4xl lg:text-[2.75rem]">
            Most websites are built to be seen. We build them to be
            <em class="em">trusted</em> — clear structure, considered typography, and nothing that
            has not earned its place.
          </p>
        </div>
      </div>
    </section>

    <!-- Capabilities -->
    <section class="shell pb-20 sm:pb-28">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-4">
          <p class="eyebrow text-[var(--color-muted)]">Capabilities</p>
          <h2 class="mt-6 text-4xl leading-[1.02] sm:text-5xl">What we do</h2>
          <p class="mt-6 max-w-sm leading-7 text-[var(--color-muted)]">
            Four disciplines, handled end to end by the same people who scoped them.
          </p>
        </div>
        <div class="lg:col-span-8">
          <div class="grid gap-8 sm:grid-cols-2">
            <article
              v-for="item in capabilities"
              :key="item.title"
              class="border border-[var(--color-line)] p-8"
            >
              <h3 class="text-2xl">{{ item.title }}</h3>
              <p class="mt-4 leading-7 text-[var(--color-muted)]">{{ item.body }}</p>
              <ul class="mt-6 space-y-2.5 border-t border-[var(--color-line)] pt-6">
                <li
                  v-for="point in item.points"
                  :key="point"
                  class="flex items-center gap-3 text-sm text-[var(--color-ink-soft)]"
                >
                  <span class="h-px w-4 shrink-0 bg-[var(--color-gold)]"></span>
                  {{ point }}
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Selected Work -->
    <section class="bg-[var(--color-paper-deep)]">
      <div class="shell py-20 sm:py-28">
        <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div class="lg:col-span-4">
            <p class="eyebrow text-[var(--color-muted)]">Selected Work</p>
            <h2 class="mt-6 text-4xl leading-[1.02] sm:text-5xl">Recent projects</h2>
            <p class="mt-6 max-w-sm leading-7 text-[var(--color-muted)]">
              Live sites built for real businesses, still running today.
            </p>
          </div>
          <div class="lg:col-span-8">
            <article
              v-for="item in projects"
              :key="item.name"
              :class="[
                'work-row border-b border-[var(--color-line)] last:border-b-0',
                item.thumb && !broken[item.thumb] ? 'has-thumb' : '',
              ]"
            >
              <div
                v-if="item.thumb && !broken[item.thumb]"
                class="hidden overflow-hidden border border-[var(--color-line)] bg-[var(--color-paper)] lg:block"
              >
                <img
                  :src="item.thumb"
                  :alt="`${item.name} preview`"
                  class="aspect-[4/3] w-44 object-cover"
                  loading="lazy"
                  @error="markBroken(item.thumb)"
                />
              </div>
              <div>
                <p class="eyebrow text-[var(--color-accent)]">{{ item.category }}</p>
                <h3 class="mt-5 text-4xl sm:text-5xl">
                  <router-link :to="`/work/${item.slug}`" class="transition hover:text-[var(--color-accent)]">
                    {{ item.name }}
                  </router-link>
                </h3>
                <p class="mt-4 max-w-2xl leading-7 text-[var(--color-muted)]">{{ item.summary }}</p>
                <ul class="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                  <li
                    v-for="tag in item.tags"
                    :key="tag"
                    class="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]"
                  >
                    {{ tag }}
                  </li>
                </ul>
              </div>
              <div class="flex flex-wrap items-center gap-6 lg:pt-2">
                <router-link :to="`/work/${item.slug}`" class="link-underlined">
                  <span>Case study</span>
                </router-link>
                <a
                  :href="item.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link-underlined !border-[var(--color-muted)] !text-[var(--color-muted)] hover:!border-[var(--color-ink)] hover:!text-[var(--color-ink)]"
                >
                  <span>Live site</span>
                  <svg class="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" />
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="shell py-20 sm:py-28">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-4">
          <p class="eyebrow text-[var(--color-muted)]">In their words</p>
          <h2 class="mt-6 text-4xl leading-[1.02] sm:text-5xl">Client statements</h2>
        </div>
        <div class="lg:col-span-8">
          <div class="grid gap-8 sm:grid-cols-2">
            <figure
              v-for="statement in testimonials"
              :key="statement.name"
              class="flex flex-col justify-between border border-[var(--color-line)] p-8"
            >
              <blockquote class="font-display text-2xl leading-[1.3]">
                &ldquo;{{ statement.quote }}&rdquo;
              </blockquote>
              <figcaption class="mt-8 flex items-center gap-4 border-t border-[var(--color-line)] pt-6">
                <img
                  v-if="statement.photo && !broken[statement.photo]"
                  :src="statement.photo"
                  :alt="statement.name"
                  class="h-11 w-11 shrink-0 border border-[var(--color-line)] object-cover"
                  loading="lazy"
                  @error="markBroken(statement.photo)"
                />
                <div>
                  <p class="text-sm font-medium text-[var(--color-ink)]">{{ statement.name }}</p>
                  <p class="mt-1 text-sm text-[var(--color-muted)]">{{ statement.company }}</p>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="bg-[var(--color-ink)] text-[var(--color-paper)]">
      <div class="shell py-20 sm:py-28">
        <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div class="lg:col-span-4">
            <p class="eyebrow text-[var(--color-paper)]/60">Method</p>
            <h2 class="mt-6 text-4xl leading-[1.02] sm:text-5xl">How we work</h2>
            <p class="mt-6 max-w-sm leading-7 text-[var(--color-paper)]/60">
              A measured sequence, the same on every project.
            </p>
          </div>
          <div class="lg:col-span-8">
            <div class="grid gap-10 sm:grid-cols-2">
              <article v-for="step in process" :key="step.numeral" class="border-t border-[var(--color-paper)]/20 pt-8">
                <p class="font-display text-4xl leading-none text-[var(--color-gold)]">{{ step.numeral }}</p>
                <h3 class="mt-5 text-2xl text-[var(--color-paper)]">{{ step.title }}</h3>
                <p class="mt-3 leading-7 text-[var(--color-paper)]/60">{{ step.body }}</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="shell py-20 sm:py-28">
      <div class="border border-[var(--color-line)] p-8 sm:p-14 lg:flex lg:items-center lg:justify-between lg:gap-12">
        <div class="max-w-2xl">
          <h2 class="text-4xl leading-[1.02] sm:text-5xl">Start a conversation.</h2>
          <p class="mt-5 leading-7 text-[var(--color-muted)]">
            Tell us about your business and what you need. We'll reply with a clear, considered
            response — no pressure, no obligation.
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
