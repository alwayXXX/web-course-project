import { createMemoryHistory, createRouter } from 'vue-router'

import Adapt from '../components/Adapt.vue'
import Apifox from '../components/Apifox.vue'
import ColorTheme from '../components/ColorTheme.vue'
import Mock from '../components/Mock.vue'
import ZhiHuHot from '../components/ZhiHuHot.vue'


const routes = [
  { path: '/zhihu', component: ZhiHuHot },
  { path: '/mock', component: Mock },
  { path: '/', component: ColorTheme },
  { path: '/apifox', component: Apifox },
  { path: '/adapt', component: Adapt },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
