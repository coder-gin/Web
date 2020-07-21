<template>
  <div>
    <h1>我是APP组件</h1>
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <router-link :to="'/user/'+userId" tag="button">用户</router-link>
    <router-link :to="{path:'/profile',query:{name:'sunny',age:18,height:1.88}}" tag="button">档案</router-link>
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>-->
    <!-- <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>-->
    <keep-alive exclude="Profile,User">
      <!-- 注意：Profile与User之间不能加空格，加空格无效 -->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    homeClick () {
      // this.$router.push('/home')
      this.$router.replace('/home')
    },
    aboutClick () {
      // this.$router.push('/about')
      this.$router.replace('/about')
    },
    userClick () {
      this.$router.push('/user/' + this.userId)
    },
    profileClick () {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'kobe',
          age: 18,
          height: 1.87
        }
      })
    }
  },
  data () {
    return {
      userId: 'lisi'
    }
  }
}
</script>

<style>
.active {
  color: red;
}
</style>
