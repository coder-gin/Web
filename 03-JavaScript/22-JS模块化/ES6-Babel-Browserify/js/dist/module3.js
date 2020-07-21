'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 默认暴露 只能暴露一次
var person = {
    name: 'kobe',
    age: 18,
    speak: function speak() {
        var _this = this;

        setTimeout(function () {
            console.log('\u6211\u7684\u540D\u5B57\u662F' + _this.name + ',\u6211\u7684\u5E74\u9F84\u662F' + _this.age + '\u5C81');
        }, 1000);
    }
};
exports.default = person;