import Vue from 'vue'
import Router from 'vue-router'
import Customers from '@/components/Customers.vue'
import About from '@/components/About.vue'
import Nav from '@/components/Nav.vue'
import Add from '@/components/Add.vue'
import CustomerDetails from '@/components/CustomerDetails.vue'

Vue.use(Router)

export default new Router({
  // history : /#/을 제거
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Customers',
      component: Customers,
      props:true
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '*',
      name: 'Nav',
      component: Nav
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/customer/:id',
      name: 'CustomerDetails',
      component: CustomerDetails
    }
  ]
})
