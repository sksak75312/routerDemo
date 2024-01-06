import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/scss/all.scss';
import  "bootstrap/dist/js/bootstrap.min.js"; // 引入完整的 bootstrap

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)


app.mount('#app')