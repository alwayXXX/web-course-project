import messages from '@intlify/unplugin-vue-i18n/messages'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import i18nPlugin from './plugin/i18n.ts'
import router from './router/index.ts'
import './style.css'
import 'virtual:uno.css'


const i18n = createI18n({
  legacy: false,
  locale: 'ja',
  fallbackLocale: 'zh-CN',
  messages,
})


const app = createApp(App)
app.use(i18n)
app.use(i18nPlugin)
app.use(router)
app.mount('#app')
