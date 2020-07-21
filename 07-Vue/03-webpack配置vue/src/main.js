import Vue from 'vue';

// import App from './vue/app';
import App from './vue/App.vue';

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
});

document.write('<h1>hello，webpack配置vue</h1>');
