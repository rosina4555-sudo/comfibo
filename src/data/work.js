export const projects = [
  {
    slug: 'richwifi',
    name: 'RichWiFi',
    category: 'Hotspot platform',
    summary:
      'A community Wi-Fi ticketing platform. Customers buy access online, receive a ticket by SMS, and connect through MikroTik hardware.',
    tags: ['Platform design', 'Payments', 'SMS delivery'],
    href: 'https://richwifi.com',
    thumb: '/work/richwifi/thumb.jpg',
    heroImage: {
      src: '/work/richwifi/hero.jpg',
      alt: 'RichWiFi purchase flow',
      caption: 'The purchase flow — location, plan, phone number, payment.',
    },
    gallery: [
      {
        src: '/work/richwifi/screen-1.jpg',
        alt: 'Admin overview',
        caption: 'Revenue, orders, and message delivery in one console.',
      },
      {
        src: '/work/richwifi/screen-2.jpg',
        alt: 'Ticket inventory',
        caption: 'Tickets imported from MikroTik and tracked as stock.',
      },
      {
        src: '/work/richwifi/screen-3.jpg',
        alt: 'Mobile purchase',
        caption: 'The same flow on a phone, where most purchases happen.',
      },
      {
        src: '/work/richwifi/screen-4.jpg',
        alt: 'SMS delivery log',
        caption: 'Failed messages surfaced for retry rather than lost.',
      },
    ],
    meta: [
      { label: 'Type', value: 'Web platform' },
      { label: 'Sector', value: 'Connectivity' },
      { label: 'Stack', value: 'Vue 3, Tailwind, Vite' },
      { label: 'Payments', value: 'Paystack' },
    ],
    intro:
      'Selling Wi-Fi access means handling money, inventory, and hardware at the same time. RichWiFi brings all three onto one screen.',
    challenge:
      'Access tickets had to be sold, delivered, and redeemed without staff intervention. Payment arrives through Paystack, a ticket has to be generated and pushed to a customer by SMS, and the same ticket has to be honoured by MikroTik hotspot hardware at the point of connection. Any break in that chain means a customer has paid and cannot get online.',
    build:
      'The purchase flow is deliberately short: choose a location, choose a plan, enter a phone number, pay. The client polls for payment confirmation, then renders the ticket on screen and hands it to the SMS provider. Plans, stock, and locations are managed from a single admin console with an analytics overview, full order history, ticket inventory imported directly from MikroTik, and a delivery log that surfaces failed messages for retry.',
    outcome:
      'The business now sells and delivers access without manual handling. Operators see revenue, orders, and message delivery in one place, and customers are connected within seconds of paying.',
    deliverables: [
      'Public purchase flow with plan and location selection',
      'Paystack checkout with confirmation polling',
      'SMS ticket delivery with a failure and retry log',
      'Admin console with revenue, orders, and inventory',
      'MikroTik ticket import and stock tracking',
    ],
    stats: [
      { value: 'Seconds', label: 'From payment to a delivered ticket' },
      { value: 'Five', label: 'Admin panels in one console' },
      { value: 'Zero', label: 'Manual steps in the sales chain' },
    ],
  },
  {
    slug: 'datapadi',
    name: 'DataPadi',
    category: 'Data & airtime',
    summary:
      'A self-service platform for buying mobile data bundles, with instant top-up, order tracking, and a dealer console for resellers.',
    tags: ['E-commerce', 'Payments', 'Dealer portal'],
    href: 'https://datapadi.online',
    thumb: '/work/datapadi/thumb.jpg',
    heroImage: {
      src: '/work/datapadi/hero.jpg',
      alt: 'DataPadi bundle selection',
      caption: 'The bundle, the number, the payment — one screen.',
    },
    gallery: [
      {
        src: '/work/datapadi/screen-1.jpg',
        alt: 'Checkout',
        caption: 'Payment with an idempotency key, so no one is charged twice.',
      },
      {
        src: '/work/datapadi/screen-2.jpg',
        alt: 'Order lookup',
        caption: 'Any order can be recovered later by its reference.',
      },
      {
        src: '/work/datapadi/screen-3.jpg',
        alt: 'Dealer console',
        caption: 'Resellers get their own pricing and reporting.',
      },
      {
        src: '/work/datapadi/screen-4.jpg',
        alt: 'Order confirmation',
        caption: 'Confirmation states that survive a closed tab.',
      },
    ],
    meta: [
      { label: 'Type', value: 'E-commerce' },
      { label: 'Sector', value: 'Telecoms' },
      { label: 'Stack', value: 'Vue 3, Tailwind, Vite' },
      { label: 'Payments', value: 'Paystack' },
    ],
    intro:
      'Buying data should take seconds and never leave a customer wondering whether it worked. DataPadi is built around that single expectation.',
    challenge:
      'A data purchase is a small transaction that must never fail silently. Payment has to be taken once and only once, the top-up has to reach the right phone number, and a customer who closes the window mid-payment must still be able to find their order. Resellers add a second audience with different needs on the same catalogue.',
    build:
      'The storefront leads with the bundle, the phone number, and the payment. Orders carry an idempotency key so repeated submissions cannot double-charge, and every order has a durable state — pending, paid, refunded, failed — that survives refreshes and interrupted payments. Customers can look up an order by reference at any time. A separate dealer console gives resellers their own pricing, references, and reporting.',
    outcome:
      'Customers get a short, predictable route from bundle to top-up, and can recover an order at any point. The dealer console opens a second revenue channel without a second website.',
    deliverables: [
      'Bundle catalogue and instant checkout',
      'Idempotent payment handling against double charges',
      'Durable order states and reference lookup',
      'Automatic top-up to the supplied number',
      'Dealer console with reseller pricing and reporting',
    ],
    stats: [
      { value: 'One screen', label: 'From bundle to paid' },
      { value: 'Any time', label: 'Order lookup by reference' },
      { value: 'Twice', label: 'Channels — retail and dealer' },
    ],
  },
]

export const testimonials = [
  {
    quote: '[Replace with a sentence from your client about working with you.]',
    name: '[Client name]',
    company: '[Business name]',
    photo: '/portraits/client-one.jpg',
  },
  {
    quote: '[Replace with a second short quote. Two lines is plenty.]',
    name: '[Client name]',
    company: '[Business name]',
    photo: '/portraits/client-two.jpg',
  },
]

export function getProject(slug) {
  return projects.find((project) => project.slug === slug)
}
