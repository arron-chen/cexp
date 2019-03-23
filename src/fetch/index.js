import axios from 'axios'
import qs from 'qs'
import store from '../store'
import router from "../router"

// axios 配置
axios.defaults.timeout = 100000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

/**
 * 请求之前可以做什么
 */
axios.interceptors.request.use((config) => {
  config.data = qs.stringify(config.data);
  if (window.localStorage.getItem("token")) {
    var lstoken = window.localStorage.getItem("token");
    config.headers.common['Authorization'] = "Bearer " + lstoken
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

/**
 * 返回拦截，可以做些什么
 */
axios.interceptors.response.use((res) => {
  return res
  document.cookie = 'userid' + res.data.msg;
}, (error) => {
  if (error.response.status == 500) {
    window.localStorage.removeItem("token")
    store.commit('SET_TOKEN', '')
    router.replace('/login')
  }
  return Promise.reject(error)
})


export default {

  //###首页
  //获取菜单接口
  fetchNavMenu: data => axios.post('/mainWeb/home/getMenu', data),
  //获取二级菜单接口
  fetchLeftNav: data => axios.get('/mainWeb/home/getMenu/other', data),
  //获取首页趋势分析模块
  fetchHomePageTrendChart: data => axios.get('/mainWeb/TrendChart/HomePageTrendChart', data),
  //获取首页趋势报表模块
  fetchHomePageReports: data => axios.get('/mainWeb/ReportTable/HomePageReports', data),

  //注册登录
  register: data => axios.post('111.230.235.200:8011/user/signup', data),
  login: data => axios.post('111.230.235.200:8011/user/login', data),

  getTime: data => axios.get('111.230.235.200:8011/user/timeout', data),
  modifyTime: data => axios.put('111.230.235.200:8011/user/timeout', data),

  getUserlist: data => axios.get('111.230.235.200:8011/user/list', data),

  deleteUser: data => axios.delete('111.230.235.200:8011/user/', data),
  modifyPassword: data => axios.put('111.230.235.200:8011/user/password', data),
  modifyPrivilege: data => axios.put('111.230.235.200:8011/user', data),





  //###系统管理
  //登录接口
  fetchToken: data => axios.post('/mainWeb/login', data),
  //获取用户列表，用户管理userManager
  fetchUsers: data => axios.get('/mainWeb/userManager/users', data),
  //用户角色分配userManager
  saveUserRole: data => axios.post('/mainWeb/userManager/saveUserRole', data),
  //获取所有角色信息rolemanager
  fetchRoleList: data => axios.get('/mainWeb/roleManager/getRoleList', data),
  //获取所有角色信息（角色列表）rolemanager
  fetchRoleListFindAllByPage: data => axios.get('/mainWeb/roleManager/findAllByPage', data),
  //获取资源列表rolemanager
  fetchPremission: data => axios.get('/mainWeb/roleManager/getPremission', data),
  //角色信息授权rolemanager
  savePremission: data => axios.post('/mainWeb/roleManager/savePremission', data),
  //日志管理，获取日志列表logManager
  fetchFindAllByPage: data => axios.get('/mainWeb/logManager/findAllByPage', data),
  //保存角色
  fetchSaveRole: data => axios.get('/mainWeb/roleManager/saveRole', data),
  //删除角色
  fetchDeleteRole: data => axios.get('/mainWeb/roleManager/deleteRole', data),


  //###查询管理
  //获取所有查询配置项
  fetchGetGlobalsearchAll: data => axios.get('/webgisWebService/globalsearch/all'),
  //获取子图层的字段信息接口
  fetchGetGlobalsearchLayerfields: data => axios.get('/webgisWebService/globalsearch/layerfields', data),
  //保存查询信息接口
  fetchGetGlobalsearchSave: data => axios.get('/webgisWebService/globalsearch/save', data),
  //删除选中的记录
  fetchGetGlobalsearchDelete: data => axios.get('/webgisWebService/globalsearch/delete', data),


}
