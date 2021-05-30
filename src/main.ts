import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
import './styles/index.less'
import { createStore } from './store'

const app = createApp(App)

app.use(createStore()).use(Antd).use(router).mount('#app')

export default app
