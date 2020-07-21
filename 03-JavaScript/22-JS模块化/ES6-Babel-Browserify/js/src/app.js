/* 
主文件，用于汇总各个模块
*/
import * as module1 from './module1';
import * as module2 from './module2';
import module3 from './module3'; // 默认暴露引入
// import * as module4 from './module4';
import school, * as module4 from './module4';
// 引入第三方模块
import uniq from 'uniq';
console.log(module1.data);
module1.demo();
module1.test();
module2.demo2();
module2.test2();
console.log(module3.name);
console.log(module3.age);
module3.speak();
console.log(module3);
console.log(module4);
console.log(school);
let array = [2, 3, 2, 1, 5, 6, 3, 9, 11, 1, 3, 2, 10];
console.log(uniq(array));
