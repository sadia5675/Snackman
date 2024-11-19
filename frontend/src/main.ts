import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Pinia importieren
import { createPinia } from 'pinia'

const app = createApp(App)

// Pinia benutzen
app.use(createPinia())

app.use(router)

app.mount('#app')
