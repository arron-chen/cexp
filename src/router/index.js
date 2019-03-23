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
import videoshow from '@/views/videoshow';
import develop from '@/views/develop';
import devshow from '@/views/devshow';
import template from '@/views/template';
import info from '@/views/info';
import imgShow from '@/views/imgShow';


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'guide',
      component: guide,
      meta: {
        requireLogin: true
      }
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
        requireAdmin: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/test/campus',
      name: 'campus',
      component: campus,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
    },

    {
      path: '/test/character',
      name: 'character',
      component: character,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/test/work',
      name: 'work',
      component: work,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/test/willing',
      name: 'willing',
      component: willing,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/test/result1',
      name: 'result1',
      component: result1,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/video',
      name: 'video',
      component: video,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/course',
      name: 'course',
      component: course,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/videoshow',
      name: 'videoshow',
      component: videoshow,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/develop',
      name: 'develop',
      component: develop,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/devshow',
      name: 'devshow',
      component: devshow,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/template',
      name: 'template',
      component: template,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },

    },
    {
      path: '/info',
      name: 'info',
      component: info,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/imgShow',
      name: 'imgShow',
      component: imgShow,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    /*{
      path: '*',
      name: 'index',
      component: index
    },*/
  ]
})
