import Vue from 'vue'
import App from './src/App.vue'
import store from './src/store'
import './style/style.scss'

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})
