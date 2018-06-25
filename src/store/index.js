import Vuex from "vuex"
import Vue from 'vue'
import * as types from './type'
import api from '../fetch/index'
import home from  './module/home/index'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      token: '12',      //请求头的token
      menuList:'',     //一级菜单
      countime:0, //默认体验时间
    },
    mutations: {
      [types.SET_TOKEN](state, res) {
            state.token = res
            window.localStorage.setItem("token", res)
        },
      [types.SET_TIME](state,res){
          state.countime = res
      },
      ["SET_TIME"](state,num){
        state.countime =num;
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

      gettime({ commit },params){
        let a=document.cookie.split(',')[0];
        var  b;
        if(a && a!= ""){
          b=a.split('=')[1];
        }
        var  param={
          "userid":b,
        };
        axios.get('http://112.74.25.26/user/timeout',{params:param}).then((res)=>{
          //console.log(res);
          commit('SET_TIME', parseInt(res.data.msg));
        }).catch((err)=>{
          console.log(err);
        });
      },
      setT({ commit },params){
          //console.log(params);
        commit('SET_TIME', params.countime);
      },
      settime({ commit },params){
          let a=document.cookie.split(',')[0];
          var  b;
          if(a && a!= ""){
            b=a.split('=')[1];
          }
        var  param={
            "userid":b,
            "time":params.countime
        };
       axios.put('http://112.74.25.26/user/timeout',param).then((res)=>{
          console.log(res);
          commit('SET_TIME', parseInt(res.data.msg));
        }).catch((err)=>{
          console.log(err);
        });
      }

    },
    modules: {
        home
    }
})
