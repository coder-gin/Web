<template>
  <div>
    <h2>首页</h2>
    <p
      class="myHome"
    >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem iusto dolor asperiores ab aliquam, nihil eius voluptatem a modi neque laboriosam commodi animi assumenda sunt, quis rerum est amet voluptate.</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      path: '/home/news'
    }
  },
  created () {
    console.log('home created')
  },
  destroyed () {
    console.log('home destroyed')
  },
  // activated,deactivated这两个函数只有该组件被 保持了状态使用了keep-alive时，才是有效的
  // activated () {
  //   console.log('home activated')
  //   this.$router.push(this.path) // 相当于在index.js中的redirect: 'news'
  // },
  deactivated () {
    console.log('home deactivated')
  },
  // beforeRouteLeave (to, from, next) {
  //   // console.log(this.$route.path)
  //   this.path = this.$route.path
  //   next()
  // }
}
</script>

<style>
.myHome {
  color: palegreen;
}
</style>