import Vuex from "vuex"
import Vue from 'vue'
import * as types from './type'
import api from '../fetch/index'
import home from  './module/home/index'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      token: '',      //请求头的token
      menuList:'',     //一级菜单
      countime:30, //默认体验时间
    },
    mutations: {
        [types.SET_TOKEN](state, res) {
            state.token = res
            window.localStorage.setItem("token", res)
        },
      [types.SET_TIME](state,res){
          state.countime = res
      }
    },
    actions: {
        [types.FETCT_TOKEN]({ commit }, params) {
            return new Promise((resolve, reject) => {
                api.login(params)
                    .then((res) => {
                        if (res.data.code == 200) {
                            commit('SET_TOKEN', res.data.message)
                            resolve(res)
                        }else{
                            resolve(res)
                        }
                    })
                    .catch((error) => {
                        reject(error)
                    })
            })
        },
      [types.FETCH_TIME]({ commit }, params) {
        return new Promise((resolve, reject) => {
          api.getTime(params).then((res)=>{
            commit('SET_TIME', res.data.message)
          }).catch((err)=>{
            reject(err)
          })
        })
      },

    },
    modules: {
        home
    }
})
