<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/mainTabBar/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import url("assets/css/reset.css");
</style>
