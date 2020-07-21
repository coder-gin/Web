import axios from 'axios'

export function request (config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/n3',
    timeout: 5000
  })

  // axios的拦截
  axios.interceptors.request.use(config => {
    console.log('这是request拦截成功')
  }, err => {
    console.log('这是request拦截失败')
  })

  return instance(config)
}