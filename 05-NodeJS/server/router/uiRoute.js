const { Router } = require('express');
const { User } = require('../model/user');
const cookieParser = require('cookie-parser');

const router = Router();

router.use(cookieParser());

router.get('/login', (req, res) => {
    // let filePath = path.join(__dirname, '../public/login.html');
    // res.sendFile(filePath);
    let { email } = req.query;
    res.render('login', { errMsg: { email } });
});

router.get('/register', (req, res) => {
    // let filePath = path.join(__dirname, '../public/register.html');
    // res.sendFile(filePath);
    let email = req.query;
    res.render('register', { errMsg: {} });
});

router.get('/userCenter', async (req, res) => {
    // let { _id } = req.cookies;
    // 1.获取cookie，读取cookie中session容器编号
    // 2.去服务器中匹配该编号对应的session容器
    // 3.根据匹配结果，进行具体的业务逻辑
    const { _id } = req.session;
    if (_id) {
        let result = await User.findOne({ _id });
        if (result) {
            res.render('userCenter', { nickName: result.nick_name });
        } else {
            console.log('非法修改cookie');
            res.redirect('/login');
        }
    } else {
        res.redirect('/login');
    }
});

module.exports = router;
