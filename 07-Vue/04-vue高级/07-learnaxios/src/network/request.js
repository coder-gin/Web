import axios from 'axios'

export function request (config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/n3',
    timeout: 10000
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    // 在发送请求前做些什么
    console.log(config)
    // 1.比如config中的一些信息不符合服务器的要求

    // 2.比如每次发送网络请求时, 都希望在界面中显示一个请求的图标

    // 3.某些网络请求(比如登录(token)), 必须携带一些特殊的信息
    return config
  }, err => {
    // 在请求错误的时候做些什么
    // console.log(err);
    return Promise.reject(err)
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    // 请求成功对响应数据的处理
    // console.log(res);
    return res
  }, err => {
    // 响应错误做些什么
    // console.log(err)
    return Promise.reject(err)
  })

  // 取消拦截器
  instance.interceptors.request.use(config => {
    config.headers = {
      auth: true
    }
    return config
  })
  axios.interceptors.request.eject(interceptors)

  // 3.发送真正的网络请求
  return instance(config)
}