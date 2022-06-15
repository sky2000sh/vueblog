import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import routes from './router'

// createApp(App).mount('#app')
createApp(App).use(routes).mount('#app')
