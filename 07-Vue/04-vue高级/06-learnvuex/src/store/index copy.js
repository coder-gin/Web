import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
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

export default new Vuex.Store({
  state: {
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
  },
  mutations: {
    increment (state) {
      state.counter++
    },
    decrement (state) {
      state.counter--
    },
    incrementCount (state, payload) {
      // console.log(count)
      // state.counter += count
      state.counter += payload.count
    },
    addStu (state, stu) {
      state.students.push(stu)
    },
    updateInfo (state) {
      state.info.name = 'sunny'

      // 下面这种增加属性不是响应式的
      // state.info['hobbies'] = 'basketball'

      // 下面这种增加属性是响应式的
      // Vue.set(state.info, 'hobbies', 'basketball')

      // 下面这种删除属性不是响应式的
      // delete state.info.age

      // 下面这种删除属性是响应式的
      // Vue.delete(state.info, 'age')

      // 不可以在mutations中进行异步操作
      // setTimeout(() => {
      //   state.info.name = 'cherry'
      // }, 1000)
    }
  },
  getters: {
    powerCounter (state) {
      return state.counter * state.counter
    },
    ageMore20 (state) {
      return state.students.filter(s => s.age > 20)
    },
    ageMore20Len (state, getters) {
      return getters.ageMore20.length
    },
    // 自定义超过age的学生有哪些
    moreAgeStu (state) {
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  actions: {
    aUpdateInfo (context, payload) {
      // setTimeout(() => {
      //   context.commit('updateInfo')
      //   console.log(payload.message)
      //   payload.success()
      // }, 3000)

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload)
          resolve()
        }, 3000)
      })
    }
  },
  modules: {
    a: moduleA
  }
})