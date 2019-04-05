import * as types from './type'
import api from '../fetch/index'
export default {
  [types.SIGNIN]({}, params) {
    return new Promise((resolve, reject) => {
      api.register(params).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  [types.LOGIN]({}, params) {
    return new Promise((resolve, reject) => {
      api.login(params).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  [types.LOGOUT]({}, params) {
    return new Promise((resolve, reject) => {
      api.logout(params).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  [types.SUBMIT_TEST1]({}, params) {
    return new Promise((resolve, reject) => {
      api.submitTest1(params).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  [types.SUBMIT_TEST2]({}, params) {
    return new Promise((resolve, reject) => {
      api.submitTest2(params).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  [types.SUBMIT_TEST3]({}, params) {
    return new Promise((resolve, reject) => {
      api.submitTest3(params).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  [types.GET_USER]({}, params) {
    return new Promise((resolve, reject) => {
      api.getUser(params).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  [types.SEARCH_USER]({}, params) {
    return new Promise((resolve, reject) => {
      api.searchUser(params).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  [types.GET_USER_LIST]({}, params) {
    return new Promise((resolve, reject) => {
      api.getUserList(params).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  
  [types.DELETE_USER]({}, params) {
    return new Promise((resolve, reject) => {
      api.deleteUser(params).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  [types.MODIFY_USER]({}, params) {
    return new Promise((resolve, reject) => {
      api.modifyUser(params).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },
 
  [types.MODIGY_USER_PWD]({}, params) {
    return new Promise((resolve, reject) => {
      api.modifyUserPwd(params).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  [types.GET_USER_INFO]({}, params) {
    return new Promise((resolve, reject) => {
      api.getUserInfo(params).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  [types.ADD_USER_INFO]({}, params) {
    return new Promise((resolve, reject) => {
      api.addUserInfo(params).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  [types.DELETE_USER_INFO]({}, params) {
    return new Promise((resolve, reject) => {
      api.deleteUserInfo(params).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  [types.GET_USER_INFOLIST]({}, params) {
    return new Promise((resolve, reject) => {
      api.getUserInfoList(params).then((res) => {
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
