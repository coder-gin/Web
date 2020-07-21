<template>
  <div>
    <h2>我是Hello World组件</h2>
    <h3>{{$store.state.counter}}</h3>
    <h2>我是HelloWorld组件中getters中info的值相关信息</h2>
    <h3>{{$store.state.info}}</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloVuex'
}
</script>

<style>
</style>