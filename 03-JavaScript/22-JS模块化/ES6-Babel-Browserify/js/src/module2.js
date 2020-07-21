// 模块2使用统一暴露
let arr = [1, 3, 5, 7, 9];
function demo2() {
    console.log('我是module2中的demo2函数', arr);
}
function test2() {
    console.log('我是module2中的test2函数', arr);
}
// 统一暴露
export { demo2, test2 };
