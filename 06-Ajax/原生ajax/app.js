const express = require('express');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/get', (req, res) => {
    console.log('一个get请求来了', req.query);
    res.send('我是原生ajax发送的get请求');
});

app.post('/post', (req, res) => {
    console.log('一个post请求来了', req.body);
    res.send('我是原生ajax发送的post请求');
});

app.get('/code', (req, res) => {
    console.log('客户端发来了获取验证码的请求');
    setTimeout(() => {
        let code = Math.floor(Math.random() * 8999 + 1000);
        res.send(code.toString());
    }, 2000);
});

app.get('/ajax-get', (req, res) => {
    console.log(req.query);
    console.log('ajax_get路由被调用了');
    res.send('我是服务器返回的GET请求的信息');
});

app.post('/ajax-post', (req, res) => {
    console.log(req.body);
    console.log('ajax_post路由被调用了');
    res.send('我是服务器返回的POST请求的信息');
});

app.listen(3000, err => {
    if (!err) {
        console.log('服务器启动成功，请访问：http://localhost:3000');
        console.log('get请求，http://localhost:3000/ajax-get.html');
        console.log('post请求，http://localhost:3000/ajax-post.html');
        console.log(
            'promise封装原生ajax，http://localhost:3000/promise-ajax.html'
        );
        console.log(
            '取消上一次请求',
            'http://localhost:3000/cancelRequest.html'
        );
        console.log(
            'jquery中的ajax-get',
            'http://localhost:3000/jquery-ajax.html'
        );
    } else console.log(err);
});
