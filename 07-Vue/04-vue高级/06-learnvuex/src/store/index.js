import Vue from 'vue'
import Vuex from 'vuex'

import moduleA from './modules/moduleA'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

const state = {
  counter: 100,
  students: [
    {
      name: 'kobe',
      age: 18
    },
    {
      name: 'lucy',
      age: 22
    },
    {
      name: 'james',
      age: 25
    },
    {
      name: 'curry',
      age: 12
    }
  ],
  info: {
    name: 'kobe',
    age: 40,
    height: 1.98
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
    a: moduleA
  }
})