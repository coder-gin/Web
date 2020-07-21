// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

/* new Vue({
  el: '#app',
  render: h => {
    return h(App)
  }
}) */

new Vue({
  // 1.普遍用法
  // render: createElement => {
  //   return createElement('h2', { class: 'title' }, ['Hello World', createElement('button',['我是按钮'])])
  // }

  // 2.传入组件对象
  render: createElement => {
    return createElement(App)
  }
})
