import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../App.vue'
import p404 from '../404.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: App},
    {path: '*', component: p404}
  ]
})
