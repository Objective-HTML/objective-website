import Vue       from 'vue'
import VueRouter from 'vue-router'

import App       from './App.vue'
import About     from './About.vue'
import Doc       from './Documentation.vue'
import Starter   from './Starter.vue'
import Main      from './Main.vue'
import Error     from './Error.vue'

import VueCodeHighlight from 'vue-code-highlight'
import 'prism-es6/components/prism-bash'
Vue.use(VueCodeHighlight)
Vue.use(VueRouter)

const route = [
  {
    path: '*',
    component: Error
  },
  {
    path: '/',
    component: App
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/documentation',
    component: Doc
  },
  {
    path: '/get-started',
    component: Starter
  },
  { 
    path: '*', 
    component: App 
  }
]

const router = new VueRouter({
  routes: route,
  mode: 'history',
  transitionOnLoad: true,
  history: true,
})

Vue.config.productionTip = false

new Vue({
  router,
  hash: false,
  render: h => h(Main)
}).$mount('#app')