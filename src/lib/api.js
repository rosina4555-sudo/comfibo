// Accepts either the bare project URL (https://xyz.supabase.co) or the REST
// URL copied from the dashboard (https://xyz.supabase.co/rest/v1/).
const BASE = (import.meta.env.VITE_SUPABASE_URL || '')
  .trim()
  .replace(/\/+$/, '')
  .replace(/\/rest\/v1$/, '')

const KEY = (import.meta.env.VITE_SUPABASE_ANON_KEY || '').trim()

export const isConfigured = Boolean(BASE && KEY)

export const FALLBACK_EMAIL = 'hello@comfibo.com'

const headers = {
  'Content-Type': 'application/json',
  apikey: KEY,
  Authorization: `Bearer ${KEY}`,
  Prefer: 'return=minimal',
}

async function insert(table, row) {
  if (!isConfigured) {
    throw new Error('supabase-not-configured')
  }

  const res = await fetch(`${BASE}/rest/v1/${table}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(row),
  })

  if (!res.ok) {
    throw new Error(`supabase-${res.status}`)
  }
}

export function submitContact({ name, email, business, message }) {
  return insert('contact_messages', {
    name,
    email,
    business: business || null,
    message,
  })
}

export function submitApplication({
  business,
  contact,
  reach,
  industry,
  current,
  goal,
  needs,
}) {
  return insert('initiative_applications', {
    business,
    contact,
    reach,
    industry,
    current_site: current || null,
    goal,
    needs,
    consent: true,
    status: 'pending',
  })
}

export async function fetchStats() {
  if (!isConfigured) return null

  const res = await fetch(
    `${BASE}/rest/v1/initiative_stats?select=total_spots,accepted_count,deadline&id=eq.1`,
    { headers },
  )

  if (!res.ok) return null

  const rows = await res.json()
  const row = rows?.[0]
  if (!row) return null

  return {
    totalSpots: Number(row.total_spots) || 0,
    acceptedCount: Number(row.accepted_count) || 0,
    deadline: typeof row.deadline === 'string' && row.deadline ? row.deadline : null,
  }
}

export function mailtoHref(subject, body) {
  return `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
