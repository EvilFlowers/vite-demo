import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element-plus';
import layout from "./layout/export"
import router from "./router"
import "@fortawesome/fontawesome-free/css/all.css"

import "./styles/index.scss"
// import "./styles/variables.scss"

const app = createApp(App)
installElementPlus(app)

app.use(router).use(layout).mount('#app')
