// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Resource from 'vue-resource'
import store from './store'

Vue.use(Resource)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  components: { App },
  template: '<App/>'
}).$mount("#app");

// new Vue({
//   router,
//   components: { App },
//   template: '<App/>'
// }).$mount("#app1");
