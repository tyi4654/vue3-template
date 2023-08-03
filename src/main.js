import { createApp } from 'vue'
//import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'

const app = createApp(App)

console.log(import.meta)

//app.use(ElementPlus)

app.mount('#app')
