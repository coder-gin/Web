const http = require('http');

const app = http.createServer((request, response) => {
    console.log(request.url);
    response.setHeader('content-type', 'text/html;charset=utf8');
    response.end('<h1>中国</h1>');
});

app.listen(3000, err => {
    if (!err) {
        console.log('服务器启动成功');
        return;
    }
    console.log(err);
});
