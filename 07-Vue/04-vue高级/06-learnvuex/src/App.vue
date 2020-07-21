<template>
  <div id="app">
    <h2>我是App组件中modules中的相关信息</h2>
    <h3>{{$store.state.a.name}}</h3>
    <button @click="updateName">点击我修改modules中的name</button>
    <h3>{{$store.getters.fullName}}</h3>
    <h3>{{$store.getters.fullName1}}</h3>
    <h3>{{$store.getters.fullName2}}</h3>
    <button @click="asyncUpdateName">点击修改modules中的名字</button>
    <h2>我是App组件</h2>
    <h3>{{$store.state.counter}}</h3>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">增加学生</button>
    <HelloVuex></HelloVuex>
    <h2>我是getters相关的值</h2>
    <h3>所有的学生有：{{$store.state.students}}</h3>
    <h3>{{$store.getters.powerCounter}}</h3>
    <h3>学生年龄超过20的有：{{$store.getters.ageMore20}}</h3>
    <h3>学生年龄超过20的个数为：{{$store.getters.ageMore20Len}}</h3>
    <h3>学生年龄超过自定义age的有：{{$store.getters.moreAgeStu(12)}}}</h3>
    <h2>我是APP组件中getters中info的值相关信息</h2>
    <h3>{{$store.state.info}}</h3>
    <button @click="updateInfo">点击我给info修改属性</button>
  </div>
</template>

<script>
import HelloVuex from '@/components/HelloVuex'
import * as mutTypes from '@/store/mutations-types'

// console.log(INCREMENT)

export default {
  name: 'App',
  methods: {
    add () {
      this.$store.commit(mutTypes.INCREMENT)
    },
    sub () {
      this.$store.commit(mutTypes.DECREMENT)
    },
    addCount (count) {
      // 1.普通的提交封装
      // this.$store.commit('incrementCount', count)

      // 2.特殊的提交封装
      this.$store.commit({
        type: mutTypes.INCREMENTCOUNT,
        count
      })
    },
    addStudent () {
      const stu = {
        name: 'cherry',
        age: 29
      }

      this.$store.commit(mutTypes.ADDSTU, stu)
    },
    updateInfo () {
      // this.$store.commit('updateInfo')

      // this.$store.dispatch('aUpdateInfo', () => console.log('info属性已修改完成'))

      // this.$store.dispatch('aUpdateInfo', {
      //   message: '我是携带过来的信息',
      //   success: () => console.log('info属性已修改完成')
      // })

      this.$store
        .dispatch('aUpdateInfo', '我是携带过来的信息')
        .then(() => {
          console.log('info属性已修改完成')
        })
    },
    updateName () {
      this.$store.commit('updateName', 'Taylor')
    },
    asyncUpdateName () {
      this.$store.dispatch('aUpdateName')
    }
  },
  components: {
    HelloVuex
  }
}
</script>

<style>
</style>