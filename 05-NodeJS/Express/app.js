const express = require('express');

const app = express();

app.disable('x-powered-by'); // 隐藏服务器的具体实现

app.use((req, res, next) => {
    // res.send('我是use');
    next();
});

app.get('/', (req, res) => {
    res.send('我是first');
});

app.get('/two', (req, res) => {
    res.send('我是two');
});

app.listen(3000, err => {
    if (!err) {
        console.log('服务器启动成功');
    } else {
        console.log(err);
    }
});
