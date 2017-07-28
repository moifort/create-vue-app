import Vue from 'vue'
import Vuex from 'vuex'
import MyDataModule from './modules/my-data-module'
import logger from './plugins/logger'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    MyDataModule
  },
  strict: debug,
  plugins: debug ? [logger()] : []
})
