import Vue from 'vue'
import Router from 'vue-router'
import Customers from '@/components/Customers.vue'
import About from '@/components/About.vue'
import Nav from '@/components/Nav.vue'
import CustomerAdd from '@/components/CustomerAdd.vue'
import CustomerDetails from '@/components/CustomerDetails.vue'
import CustomerUpdate from '@/components/CustomerUpdate.vue'
import StoreTest from '@/components/StoreTest.vue'

Vue.use(Router)

export default new Router({
  // history : /#/을 제거
  mode: 'history',
  routes: [
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
      path: '/',
      name: 'Customers',
      component: Customers,
      props:true
    },
    {
      path: '/customer/add',
      name: 'CustomerAdd',
      component: CustomerAdd
    },
    {
      path: '/customer/:id',
      name: 'CustomerDetails',
      component: CustomerDetails
    },
    {
      path: '/customer/update',
      name: 'CustomerUpdate',
      component: CustomerUpdate
    },
    {
      path: '/store/test',
      name: 'StoreTest',
      component: StoreTest
    }
  ]
})
