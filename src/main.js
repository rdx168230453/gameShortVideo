// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import header from './config/header'

import store from './store/index'

Vue.config.productionTip = false

Vue.use(router)
// require('./utils/mock.js')


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  header,
  components: { App },
  template: '<App/>'
})
