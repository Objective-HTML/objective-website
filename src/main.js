import Vue       from 'vue'
import VueRouter from 'vue-router'

import App   from './App.vue'
import About from './About.vue'
import Main  from './Main.vue'

Vue.use(VueRouter)

const route = [
  {
    path: '/',
    component: App
  },
  {
    path: '/about',
    component: About
  }
]

const router = new VueRouter({
  routes: route,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  router,
  hash: false,
  render: h => h(Main)
}).$mount('#app')