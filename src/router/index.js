import Vue from 'vue'
import Router from 'vue-router'

const Guide = () => import ('@/views/guide');
const Index = () => import ('@/views/index');
const Admin = () => import ('@/admin/index');

const Campus = () => import ('@/views/test/campus');
const Character = () => import ('@/views/test/character');
const Work = () => import ('@/views/test/work');
const Result1 = () => import ('@/views/test/result1');

const Video = () => import ('@/views/video');
const Course = () => import ('@/views/course');
const Videoshow = () => import ('@/views/videoshow');
const Develop = () => import ('@/views/develop');
const Devshow = () => import ('@/views/devshow');
const Template = () => import ('@/views/template');
const Info = () => import ('@/views/info');
const Imgshow = () => import ('@/views/imgShow');

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'guide',
      component: Guide,
      meta: {
        requireLogin: true
      }
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
        requireAdmin: true,
      },
    },
    {
      path: '/test/campus',
      name: 'campus',
      component: Campus,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
    },

    {
      path: '/test/character',
      name: 'character',
      component: Character,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/test/work',
      name: 'work',
      component: Work,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/test/result1',
      name: 'result1',
      component: Result1,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/video',
      name: 'video',
      component: Video,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/course',
      name: 'course',
      component: Course,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/videoshow',
      name: 'videoshow',
      component: Videoshow,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/develop',
      name: 'develop',
      component: Develop,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/devshow',
      name: 'devshow',
      component: Devshow,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/template',
      name: 'template',
      component: Template,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },

    },
    {
      path: '/info',
      name: 'info',
      component: Info,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/imgShow',
      name: 'imgShow',
      component: Imgshow,
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
