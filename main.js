import Vue from 'vue'
import store from './src/store'
import router from './src/router'
import filters from './src/filters'
import './style/style.scss' // eslint-disable-line import/no-unassigned-import

// Add filters
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

new Vue({ // eslint-disable-line no-new
  el: '#app',
  store,
  router,
  render: h => h('router-view')
})
