import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index';
import admin from '@/admin/index';
import login from '@/views/login';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
  ]
})
