const { User } = require('../model/user');
const { Router } = require('express');
const sha1 = require('sha1');

const router = Router();

router.post('/register', async (req, res) => {
    // 1.获取用户的输入
    const { email, password, nick_name, re_password } = req.body;
    // 2.校验数据的合法性
    const emailReg = /^[a-zA-Z0-9]{2,16}@[a-zA-Z0-9]{2,16}\.com$/;
    const nickNameReg = /[\u4e00-\u9fa5]/gm;
    const passwordReg = /^[a-zA-Z0-9_#]{2,16}$/;
    let errMsg = {};
    if (!emailReg.test(email)) {
        errMsg.emailErr =
            '邮箱不合法，要求邮箱用户名2-16位不包括特殊字符，邮箱主机名2-16位';
    }
    if (!nickNameReg.test(nick_name)) {
        errMsg.nickNameErr = '昵称输入不合法，昵称应为中文';
    }
    if (!passwordReg.test(password)) {
        errMsg.passwordErr = '密码输入不合法，密码应为6-16位字符不包含特殊字符';
    }
    if (password !== re_password) {
        errMsg.rePasswordErr = '两次输入密码不一致';
    }
    if (JSON.stringify(errMsg) !== '{}') {
        res.render('register', { errMsg });
        return;
    }
    //try里面放可能出现错误的代码，一旦出现错误，会携带着错误信息来到catch中。
    try {
        // 3.检查该邮箱是否注册过
        let findResult = await User.findOne({ email });
        if (findResult) {
            errMsg.emailErr = `注册失败，${email}已注册，请更换其它邮箱地址`;
            res.render('register', { errMsg });
        } else {
            await User.create({
                email,
                nick_name,
                password: sha1(password)
            });
            // 4.注册过——驳回;未注册——注册
            console.log(
                `邮箱为：${email}，昵称为:${nick_name}的用户注册成功了！`
            );
            res.redirect(`login?email=${email}`);
        }
    } catch (error) {
        console.log(error);
        errMsg.networkErr = '阿偶！网络不稳定，请稍后重试...';
        res.render('register', { errMsg });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const emailReg = /^[a-zA-Z0-9]{2,16}@[a-zA-Z0-9]{2,16}\.com$/;
    const passwordReg = /^[a-zA-Z0-9_#]{2,16}$/;
    const errMsg = {};
    if (!emailReg.test(email)) {
        errMsg.emailErr =
            '邮箱不合法，要求邮箱用户名2-16位不包括特殊字符，邮箱主机名2-16位';
    }
    if (!passwordReg.test(password)) {
        errMsg.passwordErr = '密码输入不合法，密码应为6-16位字符不包含特殊字符';
    }
    if (JSON.stringify(errMsg) !== '{}') {
        res.render('login', { errMsg });
        return;
    }
    try {
        let findResult = await User.findOne({
            email,
            password: sha1(password)
        });
        if (findResult) {
            // res.cookie('_id', findResult._id, { maxAge: 30 * 1000 });
            // 1.在服务器中开辟一块内存，用于存储session
            // 2.将用户的id存入上一步产生的session中
            // 3.获取session的编号，放入一个cookie中
            // 4.将上一步的cookie返回给客户端
            // req.session.id = findResult._id;
            req.session._id = findResult._id;
            /* let { _id } = findResult;
            console.log(_id);
            req.session._id = '5ead6efb76a4e72bad694c6b'; */

            res.redirect('/userCenter');
        } else {
            errMsg.loginErr = '邮箱或密码错误';
            res.render('login', { errMsg });
        }
    } catch (error) {
        console.log(error);
        errMsg.networkErr = '阿偶，网络出错...';
        res.render('login', { errMsg });
    }
});

module.exports = router;
