import { ref } from 'vue'
import { fetchStats, isConfigured } from './api.js'

export const DEFAULT_TOTAL_SPOTS = 5
export const DEFAULT_DEADLINE = '2026-11-25T23:59:00'

export const acceptedCount = ref(0)
export const totalSpots = ref(DEFAULT_TOTAL_SPOTS)
export const deadline = ref(DEFAULT_DEADLINE)
export const spotsReady = ref(false)

export async function loadSpots() {
  if (!isConfigured) {
    spotsReady.value = true
    return
  }

  const stats = await fetchStats()
  if (stats) {
    acceptedCount.value = stats.acceptedCount
    totalSpots.value = stats.totalSpots
    if (stats.deadline) deadline.value = stats.deadline
  }

  spotsReady.value = true
}
