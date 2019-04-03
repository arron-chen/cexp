import Vuex from "vuex"
import Vue from 'vue'
import state from './states'
import  mutations from './mutations'
import  getters from './getters'
import  actions from './actions'


Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
export default store
