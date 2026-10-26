<script setup>
import { ref } from 'vue'

defineProps({
  src: { type: String, default: '' },
  alt: { type: String, default: '' },
  caption: { type: String, default: '' },
  ratio: { type: String, default: 'aspect-[3/2]' },
})

const failed = ref(false)

function handleError() {
  failed.value = true
}
</script>

<template>
  <figure v-if="src && !failed" class="m-0">
    <div class="overflow-hidden border border-[var(--color-line)] bg-[var(--color-paper-deep)]">
      <img :src="src" :alt="alt" :class="[ratio, 'w-full object-cover']" loading="lazy" @error="handleError" />
    </div>
    <figcaption v-if="caption" class="mt-3 text-sm leading-6 text-[var(--color-muted)]">
      {{ caption }}
    </figcaption>
  </figure>
</template>
