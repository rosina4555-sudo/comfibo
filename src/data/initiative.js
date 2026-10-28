import { acceptedCount, totalSpots, deadline } from '../lib/spots.js'

export const initiative = {
  name: 'Small Business Website Initiative',
  fullName: 'Comfibo Small Business Website Initiative',

  get deadline() {
    return deadline.value
  },
  get totalSpots() {
    return totalSpots.value
  },

  intro:
    'A limited number of businesses will receive professional website design and development at no cost, in exchange for permission to showcase the completed work in our portfolio.',

  promise: 'A professional business website without paying for development.',

  included: [
    {
      title: 'Professional design',
      body: 'A website designed to reflect your business and brand.',
    },
    {
      title: 'Mobile-friendly experience',
      body: 'A layout that works across phones, tablets and desktops.',
    },
    {
      title: 'Essential business pages',
      body: 'Information about your business, products or services, and contact details.',
    },
    {
      title: 'Customer contact options',
      body: 'WhatsApp integration or a contact form, where appropriate.',
    },
    {
      title: 'Basic SEO setup',
      body: 'Essential page metadata and search-engine indexing configuration.',
    },
    {
      title: 'Launch assistance',
      body: 'Help getting your completed website online.',
    },
  ],

  scopeNote:
    'Each project has an agreed scope. Advanced features, paid services and additional functionality are not automatically included.',

  qualifies: [
    'Are already operating or preparing to launch.',
    'Need a new website or a substantial website redesign.',
    'Can provide the information and materials needed for their website.',
    'Are willing to collaborate throughout the project.',
  ],

  selectionNote:
    'We review applications and select projects based on suitability, feasibility and the value they can bring to both parties.',

  why:
    "We're building Comfibo's portfolio through real-world projects and meaningful business relationships.",

  whyDetail: [
    'Selected businesses receive website design and development at no cost. In return, we ask for permission to showcase the completed project in our portfolio and honest feedback about the experience.',
    "A testimonial is welcome if you're satisfied with the work, but we don't require positive reviews.",
  ],

  steps: [
    {
      numeral: 'I',
      title: 'Apply',
      body: 'Tell us about your business and what you need.',
    },
    {
      numeral: 'II',
      title: 'Discuss',
      body: "We'll review your requirements and determine whether your project is a good fit.",
    },
    {
      numeral: 'III',
      title: 'Agree',
      body: "If selected, we'll confirm the deliverables, timeline, responsibilities and any additional costs in writing.",
    },
    {
      numeral: 'IV',
      title: 'Build',
      body: "We'll design, develop and review your website with you.",
    },
    {
      numeral: 'V',
      title: 'Launch',
      body: "Once approved, we'll help get your website online and, with your permission, showcase the completed project in our portfolio.",
    },
  ],

  costsTitle: 'Is everything completely free?',
  costs:
    'Website design and development are free for selected participants within the agreed scope.',
  costsDetail:
    'Domain registration, hosting, premium software, third-party services and ongoing maintenance may involve separate costs. These will be explained and agreed upon before work begins.',

  closingTitle: 'Ready to give your business a stronger online presence?',
  closing:
    "Tell us a little about your business and what you'd like your website to achieve. We'll review your application and contact you if your business is a suitable fit for the initiative.",

  finePrint: 'Participation is limited. Submitting an application does not guarantee selection.',
}

export function takenSpots() {
  return acceptedCount.value
}

export function spotsLeft() {
  return Math.max(0, totalSpots.value - acceptedCount.value)
}

export function deadlineReached() {
  return Date.now() >= new Date(deadline.value).getTime()
}
