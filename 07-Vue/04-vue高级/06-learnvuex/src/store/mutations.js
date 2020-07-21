import * as mutTypes from './mutations-types'

export default {
  [mutTypes.INCREMENT] (state) {
    state.counter++
  },
  [mutTypes.DECREMENT] (state) {
    state.counter--
  },
  [mutTypes.INCREMENTCOUNT] (state, payload) {
    // console.log(count)
    // state.counter += count
    state.counter += payload.count
  },
  [mutTypes.ADDSTU] (state, stu) {
    state.students.push(stu)
  },
  [mutTypes.UPDATEINFO] (state) {
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
}