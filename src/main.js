// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import axios from 'axios';
Vue.prototype.$http = axios

import store from './store'

Vue.use(iView);


Vue.config.productionTip = false;


router.beforeEach((to, from, next) => {
  let validated= document.cookie.split('=')[1];
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (validated) {  // 通过vuex state获取当前的token是否存在
      next();
    }
    else {
      next({
        path: '/',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
