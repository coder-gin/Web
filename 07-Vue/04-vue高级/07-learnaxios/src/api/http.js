import axios from 'axios'
// import qs from 'qs'

/**
 * 根据环境变量区分接口的默认地址
 */
switch (process.env.NODE_ENV) {
  case 'production':
    axios.defaults.baseURL = 'http://ftys.work'
    break
  case 'test':
    axios.defaults.baseURL = 'http://192.168/72'
    break
  default:
    axios.defaults.baseURL = 'http://localhost:3000/api/admin/rest'
}

/**
 * 设置超时时间和跨域是否允许携带凭证
 */
axios.defaults.timeout = 10000
// axios.defaults.withCredentials = true

/**
 * 设置post请求头：告知服务器请求主体的数据格式，如：x-www-form-urlencoded
 */
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.transformRequest = data => qs.stringify(data)

/**
 * 设置请求拦截器
 */
axios.interceptors.request.use(config => {
  // 添加token验证，可以从本地存储中取值，也可以从vuex中取值，主要看怎么存储的
  // JWT实现token校验
  const token = localStorage.getItem('token')
  token && (config.headers.Authorization = token)
  return config
}, err => {
  return Promise.reject(err)
})

/**
 * 设置响应拦截器
 * 服务端返回信息 --> [拦截的统一处理] --> 客户端JS获取到信息
 */
/* axios.defaults.validateStatus = status => {
  return /^(2|3)\d{2}$/.test(status)
} */
axios.interceptors.response.use(response => {
  return response.data
}, err => {
  if (err.response) {
    // 请求已经发送，只不过状态码不是200系列，设置不同状态码的不同处理
    switch (err.response.status) {
      case 401: // 当前请求需要用户验证（一般是未登录）
        break
      case 403: // 服务器已经理解请求，但是拒绝执行它（一般是token过期）
        localStorage.removeItem('token')
        break
      case 404: // 请求失败，请求所希望得到的资源未被在服务器上发现
        break
    }
  } else {
    if (!window.navigator.onLine) {
      // 断网处理，可以跳转到断网页面
      return
    }
    return Promise.reject(err)
  }
})

export default axios