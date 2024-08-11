import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/base.css'

const app = createApp(App)
const router = createRouter({
  // eslint-disable-next-line node/prefer-global/process
  history: createWebHistory(process.env.ASSET_PREFIX),
  routes,
})

app.use(router)
app.mount('#app')
