import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index';
import admin from '@/admin/index';

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
    }
  ]
})
