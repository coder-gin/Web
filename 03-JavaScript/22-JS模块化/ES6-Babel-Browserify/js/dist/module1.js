'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.demo = demo;
exports.test = test;
// 模块1使用分别暴露方式
var data = exports.data = 'xiaomi';
function demo() {
    console.log('我是module1中的demo函数', data.toUpperCase());
}
function test() {
    console.log('我是module1中的test函数', data.toLowerCase());
}