<script setup>
import { computed, reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { initiative, spotsLeft, takenSpots, deadlineReached } from '../data/initiative.js'
import CountdownTicker from '../components/CountdownTicker.vue'
import SpotsMeter from '../components/SpotsMeter.vue'
import { submitApplication, mailtoHref, FALLBACK_EMAIL } from '../lib/api.js'

const closed = computed(deadlineReached)
const full = computed(() => spotsLeft() <= 0)
const blocked = computed(() => closed.value || full.value)

const form = reactive({
  business: '',
  contact: '',
  reach: '',
  industry: '',
  current: '',
  goal: '',
  needs: '',
  consent: false,
})

const submitted = ref(false)
const sending = ref(false)
const failed = ref(false)

const fallbackLink = computed(() =>
  mailtoHref(
    `Initiative application — ${form.value.business}`,
    [
      `Business: ${form.value.business}`,
      `Contact: ${form.value.contact}`,
      `WhatsApp / email: ${form.value.reach}`,
      `Industry: ${form.value.industry}`,
      `Current website: ${form.value.current || '—'}`,
      '',
      'What it should achieve:',
      form.value.goal,
      '',
      'Website needed:',
      form.value.needs,
    ].join('\n'),
  ),
)

async function handleSubmit() {
  sending.value = true
  failed.value = false

  try {
    await submitApplication({ ...form })
    submitted.value = true
  } catch {
    failed.value = true
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="shell pt-16 pb-14 sm:pt-24 sm:pb-20">
      <div class="grid gap-14 lg:grid-cols-12 lg:items-end lg:gap-16">
        <div class="lg:col-span-8">
          <p class="eyebrow text-[var(--color-accent)]">Limited initiative</p>
          <h1 class="mt-6 text-5xl leading-[1.0] sm:text-6xl lg:text-7xl">
            A professional website, built at <em class="em">no development cost</em>.
          </h1>
          <p class="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
            {{ initiative.intro }}
          </p>

          <div class="mt-9">
            <SpotsMeter :total="initiative.totalSpots" :taken="takenSpots()" />
          </div>

          <div class="mt-8 flex flex-wrap items-center gap-6">
            <a href="#apply" class="btn btn-solid" :class="blocked ? 'pointer-events-none opacity-40' : ''">
              <span>{{ blocked ? 'Applications closed' : 'Apply for the initiative' }}</span>
              <svg v-if="!blocked" class="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" />
              </svg>
            </a>
            <a href="#included" class="link-underlined">
              <span>See what's included</span>
            </a>
          </div>
        </div>

        <aside class="border border-[var(--color-line)] bg-[var(--color-paper-deep)] lg:col-span-4">
          <div class="border-b border-[var(--color-line)] px-8 py-6">
            <p class="eyebrow text-[var(--color-muted)]">Applications close</p>
            <div class="mt-4">
              <CountdownTicker :deadline="initiative.deadline" size="compact" />
            </div>
          </div>
          <div
            v-for="row in [
              { label: 'Spots', value: `${spotsLeft()} of ${initiative.totalSpots} open` },
              { label: 'Cost', value: 'No development fee' },
              { label: 'Pages', value: 'Up to 5 agreed pages' },
              { label: 'Revisions', value: '2 rounds included' },
            ]"
            :key="row.label"
            class="flex items-baseline justify-between gap-6 border-b border-[var(--color-line)] px-8 py-4 last:border-b-0"
          >
            <span class="eyebrow shrink-0 text-[var(--color-muted)]">{{ row.label }}</span>
            <span class="text-right text-sm text-[var(--color-ink)]">{{ row.value }}</span>
          </div>
        </aside>
      </div>
    </section>

    <div class="mx-auto w-full max-w-[78rem] px-6 lg:px-10">
      <div class="h-px w-full bg-[var(--color-line)]"></div>
    </div>

    <!-- Countdown band -->
    <section class="shell py-12 sm:py-16">
      <p class="eyebrow mb-6 text-[var(--color-muted)]">Closing in</p>
      <CountdownTicker :deadline="initiative.deadline" />
      <p class="mt-6 text-sm text-[var(--color-muted)]">
        {{ initiative.finePrint }}
      </p>
    </section>

    <!-- Included -->
    <section id="included" class="bg-[var(--color-paper-deep)] scroll-mt-24">
      <div class="shell py-16 sm:py-24">
        <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div class="lg:col-span-4">
            <p class="eyebrow text-[var(--color-muted)]">The offer</p>
            <h2 class="mt-6 text-4xl leading-[1.02] sm:text-5xl">What's included</h2>
            <p class="mt-6 max-w-sm leading-7 text-[var(--color-muted)]">
              Every selected business receives a website tailored to its needs.
            </p>
          </div>
          <div class="lg:col-span-8">
            <div class="grid gap-8 sm:grid-cols-2">
              <article
                v-for="item in initiative.included"
                :key="item.title"
                class="border border-[var(--color-line)] bg-[var(--color-paper)] p-7"
              >
                <div class="h-px w-8 bg-[var(--color-accent)]"></div>
                <h3 class="mt-5 text-2xl">{{ item.title }}</h3>
                <p class="mt-3 leading-7 text-[var(--color-muted)]">{{ item.body }}</p>
              </article>
            </div>
            <p class="mt-8 border-t border-[var(--color-line)] pt-6 leading-7 text-[var(--color-muted)]">
              {{ initiative.scopeNote }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Who qualifies -->
    <section class="shell py-16 sm:py-24">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-4">
          <p class="eyebrow text-[var(--color-muted)]">Eligibility</p>
          <h2 class="mt-6 text-4xl leading-[1.02] sm:text-5xl">Who can apply</h2>
        </div>
        <div class="lg:col-span-8">
          <p class="text-lg leading-9 text-[var(--color-ink-soft)]">
            This initiative is intended for genuine small businesses that want to strengthen their
            online presence. We welcome businesses that:
          </p>
          <ul class="mt-8 space-y-4">
            <li
              v-for="point in initiative.qualifies"
              :key="point"
              class="flex items-start gap-4 border-b border-[var(--color-line)] pb-4 text-[var(--color-ink-soft)]"
            >
              <span class="mt-3 h-px w-5 shrink-0 bg-[var(--color-gold)]"></span>
              {{ point }}
            </li>
          </ul>
          <p class="mt-8 leading-7 text-[var(--color-muted)]">{{ initiative.selectionNote }}</p>
        </div>
      </div>
    </section>

    <!-- Why -->
    <section class="bg-[var(--color-ink)] text-[var(--color-paper)]">
      <div class="shell py-16 sm:py-24">
        <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div class="lg:col-span-4">
            <p class="eyebrow text-[var(--color-paper)]/60">The arrangement</p>
            <h2 class="mt-6 text-4xl leading-[1.02] sm:text-5xl">Why we're offering this</h2>
          </div>
          <div class="lg:col-span-8">
            <p class="font-display text-3xl leading-[1.25] sm:text-4xl">{{ initiative.why }}</p>
            <div class="mt-8 space-y-6 text-lg leading-8 text-[var(--color-paper)]/70">
              <p v-for="detail in initiative.whyDetail" :key="detail">{{ detail }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="shell py-16 sm:py-24">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-4">
          <p class="eyebrow text-[var(--color-muted)]">Process</p>
          <h2 class="mt-6 text-4xl leading-[1.02] sm:text-5xl">How does it work</h2>
        </div>
        <div class="lg:col-span-8">
          <ol class="border-t border-[var(--color-line)]">
            <li
              v-for="step in initiative.steps"
              :key="step.numeral"
              class="grid gap-4 border-b border-[var(--color-line)] py-7 sm:grid-cols-[3rem_10rem_1fr] sm:gap-6"
            >
              <span class="font-display text-3xl leading-none text-[var(--color-gold)]">
                {{ step.numeral }}
              </span>
              <h3 class="text-2xl">{{ step.title }}</h3>
              <p class="leading-7 text-[var(--color-muted)]">{{ step.body }}</p>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <!-- Costs -->
    <section class="shell pb-16 sm:pb-24">
      <div class="border border-[var(--color-line)] p-8 sm:p-12">
        <div class="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div class="lg:col-span-5">
            <h2 class="text-3xl leading-[1.05] sm:text-4xl">{{ initiative.costsTitle }}</h2>
          </div>
          <div class="space-y-5 lg:col-span-7">
            <p class="text-lg leading-8 text-[var(--color-ink-soft)]">{{ initiative.costs }}</p>
            <p class="leading-7 text-[var(--color-muted)]">{{ initiative.costsDetail }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Apply -->
    <section id="apply" class="bg-[var(--color-paper-deep)] scroll-mt-24">
      <div class="shell py-16 sm:py-24">
        <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div class="lg:col-span-5">
            <p class="eyebrow text-[var(--color-muted)]">Application</p>
            <h2 class="mt-6 text-4xl leading-[1.02] sm:text-5xl">{{ initiative.closingTitle }}</h2>
            <p class="mt-6 max-w-md leading-7 text-[var(--color-muted)]">
              {{ initiative.closing }}
            </p>
            <div class="mt-8">
              <SpotsMeter :total="initiative.totalSpots" :taken="takenSpots()" />
            </div>
          </div>

          <div class="lg:col-span-7">
            <div
              v-if="submitted"
              class="border border-[var(--color-line)] bg-[var(--color-paper)] p-8 sm:p-12"
            >
              <p class="eyebrow text-[var(--color-accent)]">Received</p>
              <h3 class="mt-5 text-4xl">Thank you, {{ form.contact }}.</h3>
              <p class="mt-5 max-w-xl leading-7 text-[var(--color-muted)]">
                Your application for <strong>{{ form.business }}</strong> has been received. We
                review every submission and will contact you if it is a suitable fit.
              </p>
            </div>

            <div
              v-else-if="blocked"
              class="border border-[var(--color-line)] bg-[var(--color-paper)] p-8 sm:p-12"
            >
              <p class="eyebrow text-[var(--color-accent)]">Closed</p>
              <h3 class="mt-5 text-4xl">Applications are closed.</h3>
              <p class="mt-5 max-w-xl leading-7 text-[var(--color-muted)]">
                This round of the initiative has ended or all spots have been taken. Our standard
                services are still available — get in touch and we'll talk about your project.
              </p>
              <router-link to="/contact" class="btn btn-solid mt-8">
                <span>Contact us</span>
              </router-link>
            </div>

            <form v-else class="space-y-9" @submit.prevent="handleSubmit">
              <div class="space-y-3">
                <label for="business" class="field-label">Business name</label>
                <input id="business" v-model="form.business" type="text" required class="field" />
              </div>

              <div class="space-y-3">
                <label for="contact" class="field-label">Owner or contact person</label>
                <input id="contact" v-model="form.contact" type="text" required class="field" />
              </div>

              <div class="space-y-3">
                <label for="reach" class="field-label">WhatsApp number or email</label>
                <input id="reach" v-model="form.reach" type="text" required class="field" />
              </div>

              <div class="space-y-3">
                <label for="industry" class="field-label">Business industry</label>
                <input id="industry" v-model="form.industry" type="text" required class="field" />
              </div>

              <div class="space-y-3">
                <label for="current" class="field-label">
                  Current website <span class="normal-case tracking-normal opacity-70">(if any)</span>
                </label>
                <input id="current" v-model="form.current" type="text" class="field" />
              </div>

              <div class="space-y-3">
                <label for="goal" class="field-label">What should the website achieve?</label>
                <textarea id="goal" v-model="form.goal" rows="3" required class="field resize-none"></textarea>
              </div>

              <div class="space-y-3">
                <label for="needs" class="field-label">Brief description of the website you need</label>
                <textarea id="needs" v-model="form.needs" rows="4" required class="field resize-none"></textarea>
              </div>

              <label class="flex cursor-pointer items-start gap-3 text-sm leading-6 text-[var(--color-ink-soft)]">
                <input
                  v-model="form.consent"
                  type="checkbox"
                  required
                  class="mt-1 h-4 w-4 shrink-0 accent-[var(--color-accent)]"
                />
                <span>
                  I agree to be contacted about this application.
                </span>
              </label>

              <div
                v-if="failed"
                class="border border-[var(--color-accent)] bg-[var(--color-paper)] p-6"
              >
                <p class="eyebrow text-[var(--color-accent)]">Could not send</p>
                <p class="mt-3 text-sm leading-6 text-[var(--color-ink-soft)]">
                  The application could not be submitted. Please send it by email instead —
                  everything you entered is ready below.
                </p>
                <a :href="fallbackLink" class="link-underlined mt-5">
                  <span>Open in email</span>
                </a>
              </div>

              <div class="flex flex-wrap items-center gap-6 border-t border-[var(--color-line)] pt-8">
                <button type="submit" class="btn btn-solid" :disabled="sending">
                  <span>{{ sending ? 'Sending…' : 'Apply now' }}</span>
                  <svg class="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" />
                  </svg>
                </button>
                <p class="text-sm text-[var(--color-muted)]">{{ initiative.finePrint }}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
