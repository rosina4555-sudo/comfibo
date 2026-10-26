<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  business: '',
  message: '',
})

const submitted = ref(false)

const details = [
  { label: 'Email', value: 'hello@comfibo.com', href: 'mailto:hello@comfibo.com' },
  { label: 'Response', value: 'Within one business day' },
  { label: 'Obligation', value: 'None — enquiries are free' },
]

function handleSubmit() {
  submitted.value = true
}
</script>

<template>
  <div>
    <section class="shell pt-16 pb-16 sm:pt-28 sm:pb-20">
      <div class="grid gap-14 lg:grid-cols-12 lg:items-end lg:gap-16">
        <div class="lg:col-span-8">
          <p class="eyebrow text-[var(--color-muted)]">Contact</p>
          <h1 class="mt-8 text-5xl leading-[1.0] sm:text-6xl lg:text-7xl">
            Start a <em class="em">conversation</em>.
          </h1>
          <p class="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
            Tell us about your business and what you need. We'll reply within one business day with
            a clear, considered response.
          </p>
        </div>
        <aside class="border border-[var(--color-line)] bg-[var(--color-paper-deep)] lg:col-span-4">
          <div
            v-for="detail in details"
            :key="detail.label"
            class="flex items-baseline justify-between gap-6 border-b border-[var(--color-line)] px-8 py-5 last:border-b-0"
          >
            <span class="eyebrow shrink-0 text-[var(--color-muted)]">{{ detail.label }}</span>
            <a
              v-if="detail.href"
              :href="detail.href"
              class="text-right text-sm text-[var(--color-ink)] transition hover:text-[var(--color-accent)]"
            >
              {{ detail.value }}
            </a>
            <span v-else class="text-right text-sm text-[var(--color-ink)]">{{ detail.value }}</span>
          </div>
        </aside>
      </div>
    </section>

    <div class="mx-auto w-full max-w-[78rem] px-6 lg:px-10">
      <div class="h-px w-full bg-[var(--color-line)]"></div>
    </div>

    <section class="shell py-16 sm:py-24">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-7">
          <div v-if="submitted" class="border border-[var(--color-line)] bg-[var(--color-paper-deep)] p-8 sm:p-14">
            <p class="eyebrow text-[var(--color-accent)]">Received</p>
            <h2 class="mt-6 text-4xl sm:text-5xl">Thank you, {{ form.name }}.</h2>
            <p class="mt-5 max-w-xl leading-7 text-[var(--color-muted)]">
              We've received your enquiry and will be in touch shortly, usually within one business
              day.
            </p>
          </div>

          <form v-else class="space-y-10" @submit.prevent="handleSubmit">
            <div class="space-y-3">
              <label for="name" class="field-label">Name</label>
              <input id="name" v-model="form.name" type="text" required class="field" />
            </div>

            <div class="space-y-3">
              <label for="email" class="field-label">Email</label>
              <input id="email" v-model="form.email" type="email" required class="field" />
            </div>

            <div class="space-y-3">
              <label for="business" class="field-label">Business / Organisation</label>
              <input id="business" v-model="form.business" type="text" class="field" />
            </div>

            <div class="space-y-3">
              <label for="message" class="field-label">Tell us about the project</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="6"
                required
                class="field resize-none"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-solid">
              <span>Send enquiry</span>
              <svg class="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" />
              </svg>
            </button>
          </form>
        </div>

        <aside class="lg:col-span-5">
          <div class="border border-[var(--color-line)] p-8 sm:p-10">
            <p class="eyebrow text-[var(--color-muted)]">What happens next</p>
            <ol class="mt-8 space-y-8">
              <li class="flex gap-6">
                <span class="font-display text-3xl leading-none text-[var(--color-gold)]">I</span>
                <div>
                  <h3 class="text-xl">We read your enquiry</h3>
                  <p class="mt-2 leading-7 text-[var(--color-muted)]">
                    Every message is read by the person who would do the work.
                  </p>
                </div>
              </li>
              <li class="flex gap-6">
                <span class="font-display text-3xl leading-none text-[var(--color-gold)]">II</span>
                <div>
                  <h3 class="text-xl">We reply with next steps</h3>
                  <p class="mt-2 leading-7 text-[var(--color-muted)]">
                    A clear response on whether we're a fit and how we'd proceed.
                  </p>
                </div>
              </li>
              <li class="flex gap-6">
                <span class="font-display text-3xl leading-none text-[var(--color-gold)]">III</span>
                <div>
                  <h3 class="text-xl">We begin</h3>
                  <p class="mt-2 leading-7 text-[var(--color-muted)]">
                    Scope and timeline are agreed before any work starts.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>
