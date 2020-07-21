const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/test1', (req, res) => {
    res.cookie('demo', 123);
    res.cookie('demo1', 456, { maxAge: 30 * 1000 });
    res.send('我给你种下了一个cookie');
});

app.get('/test2', (req, res) => {
    let result = req.cookies;
    console.log(result);
    res.send('我获取到了你种下的cookie');
});

app.get('/test3', (req, res) => {
    // res.cookie('demo1', '', { maxAge: 0 });
    res.clearCookie('demo');
    res.send('删除了一个cookie');
});

app.listen(3000, err => {
    if (!err) console.log('服务器启动成功');
    else console.log(err);
});
