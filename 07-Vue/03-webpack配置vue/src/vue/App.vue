<template>
  <div>
    <h1 class="title">{{ msg }}</h1>
    <button @click="btnClick">按钮</button>
    <h1>{{ name }}</h1>
    <Con></Con>
  </div>
</template>

<script>
import Con from './Con.vue';
export default {
  name: 'App',
  data() {
    return {
      msg: 'hello webpack',
      name: 'sunny'
    };
  },
  methods: {
    btnClick() {
      console.log('hello vue');
    }
  },
  components: {
    Con
  }
};
</script>
<style scoped>
.title {
  color: palegreen;
}
</style>
