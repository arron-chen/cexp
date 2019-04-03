import * as types from './type'
import api from '../fetch/index'
export default {
    [types.LOGIN]({},params) {
      debugger
        return new Promise((resolve, reject) => {
          api.login(params).then((res) => {
            resolve(res)
          }).catch((err) => {
            reject(err)
          })
        })
      },
      [types.LOGOUT]({},params) {
        return new Promise((reslove, reject) => {
          api.logout(params).then((res) => {
            resolve(res)
          }).catch((err) => {
            reject(err)
          })
        })
      },
      [types.FETCT_TOKEN]({
        commit
      }, params) {
        return new Promise((resolve, reject) => {
          api.login(params)
            .then((res) => {
              if (res.data.code == 200) {
                commit('SET_TOKEN', res.data.message)
                resolve(res)
              } else {
                resolve(res)
              }
            })
            .catch((error) => {
              reject(error)
            })
        })
      },
      [types.FETCH_TIME]({
        commit
      }, params) {
        return new Promise((resolve, reject) => {
          api.getTime(params)
            .then((res) => {
              if (res.status == 200  && res.data.code === 0) {
                let num = parseInt(res.data.msg)
                commit('SET_TIME', num)
                resolve(res)
              } else {
                resolve(res)
              }
            })
            .catch((error) => {
              reject(error)
            })
        })
      },
      [types.MODIFY_TIME]({
        commit
      }, params) {
        return new Promise((resolve, reject) => {
          api.modifyTime(params)
            .then((res) => {
              if (res.status == 200 && res.data.code === 0) {
                let num = parseInt(res.data.msg)
                commit('SET_TIME', num)
                resolve(res)
              } else {
                resolve(res)
              }
            })
            .catch((error) => {
              reject(error)
            })
        })
      }
}