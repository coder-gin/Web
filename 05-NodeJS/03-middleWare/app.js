const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// 使用body-parser中间件解析post请求过来的请求体参数为一个对象，随后挂载到request上
// app.use(bodyParser.urlencoded({ extended: true }))

// 内置中间件解析post请求过来的请求体参数为一个对象，随后挂载到request上
app.use(express.urlencoded({ extended: true }))

// 中间件暴露静态资源
app.use(express.static('public'))

app.use((req, res, next) => {
  // res.send('我是中间件的响应')

  if (req.get('host') !== 'localhost:3000') {
    res.send('禁止发送非法请求')
  } else {
    next() // 让一个匹配的中间件或路由生效
  }
})

app.get('/', (req, res) => {
  res.send('我是根路由的响应')
})

app.get('/two', (req, res) => {
  res.send('我是一级路由的响应')
})

app.post('/demo', (req, res) => {
  console.log(req.body)
  res.send(req.body)
})

app.listen(3000, err => {
  if (!err) return console.log('http://localhost:3000')
  console.log(err)
})