import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from "vuetify"
import "vuetify/styles"
import '@mdi/font/css/materialdesignicons.css'
import VueApexCharts from "vue3-apexcharts";

const vuetify = createVuetify();

const app = createApp(App)
app.component("apexchart", VueApexCharts)

app.use(router)
app.use(vuetify)

app.mount('#app')
