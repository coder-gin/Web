import Vue from 'vue'
import App from './App'
// import axios from 'axios'
// import { request } from './network/request'
import * as api from './api/api'

Vue.config.productionTip = false

Vue.prototype.$api = api
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// 1.axios的基本使用

/* axios({
  url: 'http://123.207.32.32:8000/home/multidata'
})
  .then(res => console.log(res))

axios({
  url: 'http://152.136.185.210:8000/api/n3/home/data',

  // 专门针对get请求参数的拼接
  params: {
    type: 'pop',
    page: 3
  }
}).then(res => console.log(res)) */

/* axios.get('http://152.136.185.210:8000/api/n3/home/data', {
  params: {
    type: 'pop',
    page: 3
  }
}).then(res => console.log(res)).catch(err => console.log(err)) */


// 2.axios发送并发请求

/* axios.all([axios({
  url: 'http://152.136.185.210:8000/api/n3/home/multidata'
}), axios({
  url: 'http://152.136.185.210:8000/api/n3/home/data',
  params: {
    type: 'pop',
    page: 1
  }
})]).then(axios.spread((res1, res2) => {
  console.log(res1)
  console.log(res2)
})) */

// 3.使用全局的axios和对应的配置在进行网络请求

/* axios.defaults.baseURL = 'http://152.136.185.210:8000/api/n3'
axios.defaults.timeout = 5000

axios.all([
  axios({
    url: '/home/multidata'
  }),
  axios({
    url: '/home/data',
    params: {
      type: 'pop',
      page: 1
    }
  })
])
  .then(axios.spread((res1, res2) => {
    console.log(res1)
    console.log(res2)
  })) */

// 4.创建对应的axios的实例

/* const instance1 = axios.create({
  baseURL: 'http://152.136.185.210:8000/api/n3',
  timeout: 5000
})

instance1({
  url: '/home/multidata'
}).then(res => console.log(res))

const instance2 = axios.create({
  baseURL: 'http://123.207.32.32:8000'
})
instance2({
  url: '/home/multidata'
}).then(res => console.log(res)) */


// 5.封装

// request({
//   url: '/home/multidata',
// })
//   .then(res => console.log(res))
//   .catch(err => console.log(err))