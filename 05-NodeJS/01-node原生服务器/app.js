// 引入http模块
const http = require('http')

// 创建server对象
const app = http.createServer((request, response) => {
    /**
     * request：请求对象 -------- 客户端发给服务器
     * response：响应对象 ------- 服务器给客户端
     */

    console.log(request.url)
    response.setHeader('content-type', 'text/html;charset=utf8')
    response.end('<h1>你好！this is node!</h1>')
})

// 绑定端口监听
app.listen(3000, err => {
    if (!err) return console.log('http://localhost:3000')
    console.log(err)
})
