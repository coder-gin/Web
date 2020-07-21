export default {
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
}