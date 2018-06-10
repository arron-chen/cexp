import Vue from 'vue'
import Router from 'vue-router'
import guide from '@/views/guide';
import index from '@/views/index';
import admin from '@/admin/index';
import login from '@/views/login';

import campus from '@/views/test/campus';
import character from '@/views/test/character';
import work from '@/views/test/work';
import willing from '@/views/test/willing';

import result1 from '@/views/test/result1';
import video from '@/views/video';
import course from '@/views/course';
import develop from '@/views/develop';
import template from '@/views/template';
import info from '@/views/info';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'guide',
      component: guide
    },
    {
      path:'/index',
      name:'index',
      component:index,
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
    {
      path: '/test/work',
      name: 'work',
      component: work
    },
    {
      path: '/test/willing',
      name: 'willing',
      component: willing
    },
    {
      path: '/test/result1',
      name: 'result1',
      component: result1
    },
    {
      path:'/video',
      name:'video',
      component:video
    },
    {
      path:'/course',
      name:'course',
      component:course
    },
    {
      path:'/develop',
      name:'develop',
      component:develop
    },
    {
      path:'/template',
      name:'template',
      component:template
    },
    {
      path:'/info',
      name:'info',
      component:info
    },
    /*{
      path: '*',
      name: 'index',
      component: index
    },*/
  ]
})
