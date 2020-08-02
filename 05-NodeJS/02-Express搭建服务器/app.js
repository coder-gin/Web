// 引入express
const express = require('express')

// 创建app服务器对象
const app = express()

app.disable('x-powered-by') // 隐藏服务器的具体实现

app.use((req, res, next) => {
    // res.send('我是use');
    next()
})

// 设置路由
app.get('/', (req, res) => { // 根路由
    res.send('我是first')
})

app.get('/two', (req, res) => { // 一级路由
    res.send('我是two')
})

app.post('/three', (req, res) => {
    res.send('已收到post请求，这是我的回应！')
})

app.listen(3000, err => {
    if (!err) return console.log('http://localhost:3000')
    console.log(err)
})
