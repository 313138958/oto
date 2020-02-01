import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[]
  },
  mutations: {
    setState(state,payload){
      state[payload.key] = payload.value
    }
  },
  actions: {
    getlist({state,commit}){
      const { Api } = Vue.prototype
      Api('get','/getlist').then(res=>{
        commit({type:'setState',key:'list',value:res.data.result})
      })
    }
  },
  modules: {
  }
})
