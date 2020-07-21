<template>
  <div>
    <h2>我是Profile组件</h2>
    <p>我叫{{$route.query.name}}，{{$route.query.age}}岁，身高{{$route.query.height}}</p>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  created () {
    console.log('profile created')
  },
  destroyed () {
    console.log('profile destroyed')
  },
  // activated,deactivated这两个函数只有该组件被 保持了状态使用了keep-alive时，才是有效的
  // activated () {
  //   console.log('profile activated')
  //   this.$router.push(this.path) // 相当于在index.js中的redirect: 'news'
  // },
  deactivated () {
    console.log('profile deactivated')
  },
}
</script>

<style>
</style>