import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index';
import admin from '@/admin/index';
import login from '@/views/login';
import campus from '@/views/test/campus';
import character from '@/views/test/character';

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
    {
      path: '/test/campus',
      name: 'campus',
      component: campus
    },
    {
      path: '/test/character',
      name: 'character',
      component: character
    },
    /*{
      path: '*',
      name: 'index',
      component: index
    },*/
  ]
})
