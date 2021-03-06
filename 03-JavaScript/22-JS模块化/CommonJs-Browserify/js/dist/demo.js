(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
  1. 定义暴露模块:
    module.exports = value;
    exports.xxx = value;
  2. 引入模块:
    var module = require(模块名或模块路径);
*/
//引用模块
let module1 = require('./module1');
let module2 = require('./module2');
let module3 = require('./module3');
//使用模块
module1.foo();
module2();
module3.foo();
module3.bar();

},{"./module1":2,"./module2":3,"./module3":4}],2:[function(require,module,exports){
/**
 * 使用module.exports = value向外暴露一个对象
 */
module.exports = {
    foo() {
        console.log('moudle1 foo()');
    }
};

},{}],3:[function(require,module,exports){
/**
 * 使用module.exports = value向外暴露一个函数
 */
module.exports = function () {
    console.log('module2()');
};

},{}],4:[function(require,module,exports){
/**
 * 使用exports.xxx = value向外暴露一个对象
 */
exports.foo = function () {
    console.log('module3 foo()');
};

exports.bar = function () {
    console.log('module3 bar()');
};

},{}]},{},[1]);
