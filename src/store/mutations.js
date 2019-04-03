import * as types from './type'
export default {
    [types.SET_TOKEN](state, res) {
        state.token = res
        window.localStorage.setItem("token", res)
      },
      [types.SET_TIME](state, num) {
          state.timeNum = num
      }
}