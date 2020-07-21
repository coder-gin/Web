export default {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName (state, payload) {
      state.name = payload
    }
  },
  getters: {
    fullName (state) {
      return state.name + '-Swift'
    },
    fullName1 (state, getters) {
      return getters.fullName + '我是增加的fullName'
    },
    fullName2 (state, getters, rootState) {
      return getters.fullName1 + rootState.counter
    }
  },
  actions: {
    aUpdateName (context) {
      setTimeout(() => {
        context.commit('updateName', 'wangwu')
      }, 1000)
    }
  }
}