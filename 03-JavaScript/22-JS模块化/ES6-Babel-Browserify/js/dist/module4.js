'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bar = bar;
/* 混合 */

// 分别暴露
var arr0 = exports.arr0 = [2, 4, 6, 8];
function bar() {
    console.log('我是module4暴露的bar');
}
// 统一暴露
function foo() {
    console.log('我是module4暴露的foo');
}
var student = {
    name: 'cherry',
    age: 20,
    sex: 'female'
};
exports.foo = foo;
exports.student = student;
exports.default = {
    school: '百度前端学院'
};