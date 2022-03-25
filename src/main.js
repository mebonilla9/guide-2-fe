import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import '@/index.css'
import Axios from 'axios'

Axios.defaults.baseURL = 'http://localhost:8080/api/v1'

createApp(App).use(router).mount('#app')
