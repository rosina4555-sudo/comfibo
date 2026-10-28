<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  deadline: { type: String, required: true },
  size: { type: String, default: 'full' },
})

const emit = defineEmits(['complete'])

const remaining = ref(0)
let timer = null

const pad = (n) => String(Math.max(0, n)).padStart(2, '0')

const units = computed(() => {
  const total = Math.max(0, remaining.value)
  const s = Math.floor(total / 1000)
  return [
    { label: 'Days', value: pad(Math.floor(s / 86400)) },
    { label: 'Hours', value: pad(Math.floor((s % 86400) / 3600)) },
    { label: 'Minutes', value: pad(Math.floor((s % 3600) / 60)) },
    { label: 'Seconds', value: pad(s % 60) },
  ]
})

const expired = computed(() => remaining.value <= 0)

function tick() {
  const target = new Date(props.deadline).getTime()
  remaining.value = target - Date.now()
  if (remaining.value <= 0 && timer) {
    clearInterval(timer)
    timer = null
    emit('complete')
  }
}

onMounted(() => {
  tick()
  timer = setInterval(tick, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div v-if="size === 'full'" class="border-y border-[var(--color-line)]">
    <div class="grid grid-cols-4 divide-x divide-[var(--color-line)]">
      <div v-for="unit in units" :key="unit.label" class="px-3 py-5 text-center sm:px-6 sm:py-7">
        <p class="font-display text-4xl leading-none sm:text-6xl">{{ unit.value }}</p>
        <p class="eyebrow mt-3 text-[var(--color-muted)]">{{ unit.label }}</p>
      </div>
    </div>
  </div>

  <div v-else class="flex items-baseline gap-3 sm:gap-4">
    <span
      v-for="unit in units"
      :key="unit.label"
      class="flex items-baseline gap-1 sm:gap-1.5"
    >
      <span class="inline-block w-[1.7em] text-right font-display text-xl leading-none sm:text-2xl">
        {{ unit.value }}
      </span>
      <span class="text-[10px] font-semibold uppercase tracking-[0.16em] opacity-70">
        {{ unit.label.charAt(0) }}
      </span>
    </span>
  </div>

  <p v-if="expired" class="text-sm text-[var(--color-muted)]">Applications are now closed.</p>
</template>
