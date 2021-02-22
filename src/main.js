import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element-plus';
import router from "./router"

import "./styles/index.scss"

const app = createApp(App)
installElementPlus(app)

app.use(router).mount('#app')