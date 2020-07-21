/* 混合 */

// 分别暴露
export let arr0 = [2, 4, 6, 8];
export function bar() {
    console.log('我是module4暴露的bar');
}
// 统一暴露
function foo() {
    console.log('我是module4暴露的foo');
}
let student = {
    name: 'cherry',
    age: 20,
    sex: 'female'
};
export { foo, student };
export default {
    school: '百度前端学院'
};
