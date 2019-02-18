// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//library
import Vue from 'vue'
import axios from 'axios'

//vue file
import App from './App.vue'

//path file
import router from './router.js'

//scss
import './assets/scss/styles.scss'
import './assets/scss/home.scss'
import './assets/scss/search.scss'

Vue.config.productionTip = false

Vue.prototype.$axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  components: { App },
  template: '<App/>'
})
