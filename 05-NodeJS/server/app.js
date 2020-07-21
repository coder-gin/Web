const express = require('express');
const path = require('path');
/* const session = require('express-session');
const MongoStore = require('connect-mongo')(session); */

require('./model/connect');
let uiRoute = require('./router/uiRoute');
let businessRoute = require('./router/businessRouter');
//引入express-session用于在express中操作session
let session = require('express-session');
//引入connect-mongo用于session持久化
const MongoStore = require('connect-mongo')(session);
const { User } = require('./model/user');

const app = express();

app.engine('art', require('express-art-template'));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'art');

app.use(
    session({
        name: 'userId', //设置cookie的name，默认值是：connect.sid
        secret: 'hello', //参与加密的字符串（又称签名）
        // saveUninitialized: false, //是否在存储内容之前创建会话
        // resave: true, //是否在每次请求时，强制重新保存session，即使他们没有变化
        // store: new MongoStore({
        //     url: 'mongodb://localhost:27017/cookies_container',
        //     touchAfter: 1800 //修改频率（例：//在24小时之内只更新一次）
        // }),
        cookie: {
            // httpOnly: true, // 开启后前端无法通过 JS 操作cookie
            maxAge: 1000 * 30 // 设置cookie的过期时间
        }
    })
);

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(uiRoute);
app.use(businessRoute);

app.listen(3000, err => {
    if (!err) console.log('服务器启动成功');
    else console.log(err);
});
