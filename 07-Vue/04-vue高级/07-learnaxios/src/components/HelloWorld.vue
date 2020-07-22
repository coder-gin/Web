<template>
  <div>
    <h1>{{categories}}</h1>
  </div>
</template>

<script>
import { request } from '@/network/request'

export default {
  name: 'HelloWorld',
  data () {
    return {
      categories: ''
    }
  },
  created () {
    request({
      url: '/home/data?type=pop&page=1'
    })
      .then(res => {
        this.categories = res
      })
  }
}
</script>

<style>
</style>