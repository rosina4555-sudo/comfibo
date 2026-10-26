# Comfibo

Marketing site for **Comfibo**, a web design & development agency that builds websites for businesses and helps them establish a strong online presence.

## Stack

- [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) via the `@tailwindcss/vite` plugin
- [Vue Router](https://router.vuejs.org/)

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview the production build
```

## Project structure

```
src/
├── App.vue               # app shell (header + router-view + footer)
├── main.js               # entry, registers the router
├── router/index.js       # routes, lazy-loaded views, page titles
├── style.css             # Tailwind import + Comfibo theme tokens
├── components/
│   ├── SiteHeader.vue    # sticky nav with mobile menu
│   └── SiteFooter.vue
└── views/
    ├── HomeView.vue      # hero, services, process, CTA
    ├── ServicesView.vue
    ├── AboutView.vue
    ├── ContactView.vue   # quote request form (submission is a placeholder)
    └── NotFoundView.vue  # 404
```

## Routes

| Path             | Page   |
| ---------------- | ------ |
| `/`              | Home   |
| `/services`      | Services |
| `/about`         | About  |
| `/contact`       | Contact |
| anything else    | 404    |

## Notes

- Brand colors live in `src/style.css` under `@theme` as the `brand-*` palette. Change them there and every usage updates.
- The contact form only shows a success state — wire `handleSubmit` in `src/views/ContactView.vue` to a backend or form service when ready.
