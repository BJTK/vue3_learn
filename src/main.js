import { createApp } from 'vue'
// import store from "./store/index"
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import router from './router/index'
import 'element-plus/dist/index.css'
import App from './App.vue'
const app = createApp(App)
app.use(router).use(createPinia()).use(ElementPlus).mount('#app')
