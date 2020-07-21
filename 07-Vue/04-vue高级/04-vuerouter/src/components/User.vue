<template>
  <div>
    <h2>用户</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsa facere magnam officiis facilis! Id sit dolores, corporis non illum illo omnis iusto blanditiis! Animi vitae incidunt ex sed soluta!</p>
    <!-- <div>动态路由的名字为：{{userId}}</div> -->
    <div>动态路由的名字为：{{$route.params.userId}}</div>
  </div>
</template>

<script>
export default {
  name: 'User',
  computed: {
    userId () {
      return this.$route.params.userId
    }
  },
  created () {
    console.log('user created')
  },
  destroyed () {
    console.log('user destroyed')
  },
  // activated,deactivated这两个函数只有该组件被 保持了状态使用了keep-alive时，才是有效的
  // activated () {
  //   console.log('user activated')
  //   this.$router.push(this.path) // 相当于在index.js中的redirect: 'news'
  // },
  deactivated () {
    console.log('user deactivated')
  },
}
</script>

<style>
</style>