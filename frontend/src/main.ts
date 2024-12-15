import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Pinia importieren
import { createPinia } from 'pinia'

// Toast und Styles importieren
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(Toast)

app.mount('#app')
