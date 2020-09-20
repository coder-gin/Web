<template>
  <div id="app">
    <!-- <div>{{result}}</div> -->
    <div>-------------------------------</div>
    <!-- <HelloWorld></HelloWorld> -->
  </div>
</template>

<script>
// import { request } from '@/network/request'
// import HelloWorld from '@/components/HelloWorld'
// import { getCategories } from './api/api'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data () {
    return {
      result: ''
    }
  },
  created () {
    console.log(this.$api.getCategories().baseURL)
    this.$api.getCategories().then(res => console.log(res))
    // getCategories().then(res => console.log(res))
    // request({
    //   url: '/home/multidata'
    // })
    //   .then(res => {
    //     this.result = res
    //   })
  },

}
</script>

<style>
</style>
