(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _module = require('./module1');

var module1 = _interopRequireWildcard(_module);

var _module2 = require('./module2');

var module2 = _interopRequireWildcard(_module2);

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

var _module5 = require('./module4');

var module4 = _interopRequireWildcard(_module5);

var _uniq = require('uniq');

var _uniq2 = _interopRequireDefault(_uniq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// 默认暴露引入
// import * as module4 from './module4';
console.log(module1.data);
// 引入第三方模块
/* 
主文件，用于汇总各个模块
*/

module1.demo();
module1.test();
module2.demo2();
module2.test2();
console.log(_module4.default.name);
console.log(_module4.default.age);
_module4.default.speak();
console.log(_module4.default);
console.log(module4);
console.log(module4.default);
var array = [2, 3, 2, 1, 5, 6, 3, 9, 11, 1, 3, 2, 10];
console.log((0, _uniq2.default)(array));
},{"./module1":2,"./module2":3,"./module3":4,"./module4":5,"uniq":6}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 模块2使用统一暴露
var arr = [1, 3, 5, 7, 9];
function demo2() {
    console.log('我是module2中的demo2函数', arr);
}
function test2() {
    console.log('我是module2中的test2函数', arr);
}
// 统一暴露
exports.demo2 = demo2;
exports.test2 = test2;
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique

},{}]},{},[1]);
