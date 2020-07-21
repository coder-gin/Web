const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/get', (req, res) => {
    let arr = [
        { name: 'sunny', age: 18 },
        { name: 'Tom', age: 20 }
    ];
    console.log(req.query);
    let { callback } = req.query;
    res.send(`${callback}(${JSON.stringify(arr)})`);
});

app.get('/cors-get', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.send('我是服务器响应的get信息');
});

app.post('/cors-post', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.send('我是服务器响应的post信息');
});

app.listen(3000, err => {
    if (!err) console.log('ok');
    else console.log(err);
});
