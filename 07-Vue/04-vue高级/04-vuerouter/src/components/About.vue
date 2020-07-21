<template>
  <div>
    <h2>关于</h2>
    <p
      class="myAbout"
    >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla culpa est earum quidem rem, unde quo atque cupiditate explicabo accusamus veniam nisi commodi modi quos, quisquam natus dolor repudiandae asperiores!</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  created () {
    console.log('about created')
  },
  destroyed () {
    console.log('about destroyed')
  },
  // activated,deactivated这两个函数只有该组件被 保持了状态使用了keep-alive时，才是有效的
  // activated () {
  //   console.log('about activated')
  //   this.$router.push(this.path) // 相当于在index.js中的redirect: 'news'
  // },
  deactivated () {
    console.log('about deactivated')
  },
}
</script>

<style>
.myAbout {
  color: palevioletred;
}
</style>