import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { loadSpots } from './lib/spots.js'

loadSpots()

createApp(App).use(router).mount('#app')
