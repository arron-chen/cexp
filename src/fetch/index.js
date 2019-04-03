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


  //注册登录
  /**
   * 用户注册
   * @param {string} username 用户账号
   * @param {string} password 用户密码  
   */
  register: data => axios.post('http://112.74.25.26/user/signup', data),

  /**
   * 用户登录
   * @param {string} username 用户账号
   * @param {string} password 用户密码  
   */
  login: data => axios.post('http://112.74.25.26/user/login', data),

    /**
   * 注销登录
   */
  logout: data => axios.delete('http://112.74.25.26/user/logout', data),


  //### 管理页
  /**
   * 修改用户信息
   * @param {number} userid 用户id
   * @param {number} level 用户分级  0.普通用户 1.管理员 2.vip  
   */
  modifyUser: data => axios.put('http://112.74.25.26/user', data),

/**
   * 修改用户密码
   * @param {number} userid 用户id
   * @param {string} password 用户密码  
   */
  modifyUserPwd: data => axios.put('http://112.74.25.26/user/password', data),

  /**
   * 用户信息查找
   * @param {string} param 用户输入的查找信息 
   * @return {array} 对应查找的用户信息，无则空
   */
  searchUser: data => axios.get('http://112.74.25.26/user/search', data),

  /**
   * 删除用户信息
   * @param {number} userid 用户id 
   */
  deleteUser: data => axios.delete('112.73.25.26/user', data),

  /**
   * 获取用户列表
   * @return {array} 用户列表  
   */
  getUserList: data => axios.get('http://112.74.25.26/user/list', data),


/**
   * 添加对应用户资源
   * @param {number} userid 用户id
   * @param {strign} title 资源标题
   * @param {string} url 资源url  
   */
  addUserInfo: data => axios.post('http://112.74.25.26/user/infoList', data),

  /**
   * 删除对应用户资源
   * @param {number} userid 用户id
   * @param {number} infoid 资源id
   */
  deleteUserInfo: data => axios.delete('http://112.74.25.26/user/infoList', data),

   /**
   * 获取对应用户资源列表
   * @param {number} userid 用户id
   * @return {array} 资源列表数组
   */
  getUserInfoList: data => axios.get('http://112.74.25.26/user/infoList', data),

  /**
   * 获取对应用户时长
   * @param {number} userid 用户id
   */
  getTime: data => axios.get('http://112.74.25.26/user/timeout', {params: data}),

  /**
   * 修改对应用户时长
   * @param {number} userid 用户id
   * @param {number} time  时长
   */
  modifyTime: data => axios.put('http://112.74.25.26/user/timeout', data)

}
