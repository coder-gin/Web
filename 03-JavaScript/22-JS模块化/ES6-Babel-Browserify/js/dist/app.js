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