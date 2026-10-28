<script setup>
import { computed } from 'vue'

const props = defineProps({
  total: { type: Number, required: true },
  taken: { type: Number, default: 0 },
  tone: { type: String, default: 'light' },
})

const left = computed(() => Math.max(0, props.total - props.taken))

const open = computed(() =>
  Array.from({ length: props.total }, (_, i) => i < props.taken),
)
</script>

<template>
  <div class="flex items-center gap-3">
    <div class="flex items-center gap-1.5">
      <span
        v-for="(isTaken, i) in open"
        :key="i"
        :class="
          isTaken
            ? tone === 'dark'
              ? 'bg-[var(--color-paper)]/35'
              : 'bg-[var(--color-line)]'
            : tone === 'dark'
              ? 'bg-[var(--color-gold)]'
              : 'bg-[var(--color-accent)]'
        "
        class="h-2.5 w-2.5"
        aria-hidden="true"
      />
    </div>
    <span
      :class="tone === 'dark' ? 'text-[var(--color-paper)]/75' : 'text-[var(--color-muted)]'"
      class="text-[11px] font-semibold uppercase tracking-[0.18em]"
    >
      {{ left }} of {{ total }} spots open
    </span>
  </div>
</template>
