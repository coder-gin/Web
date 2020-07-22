<template>
  <div id="app">
    <div>{{result}}</div>
    <div>-------------------------------</div>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import { request } from '@/network/request'
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      result: ''
    }
  },
  created () {
    request({
      url: '/home/multidata'
    })
      .then(res => {
        this.result = res
      })
  },

}
</script>

<style>
</style>
