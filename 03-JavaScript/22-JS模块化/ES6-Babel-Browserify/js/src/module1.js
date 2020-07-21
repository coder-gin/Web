// 模块1使用分别暴露方式
export let data = 'xiaomi';
export function demo() {
    console.log('我是module1中的demo函数', data.toUpperCase());
}
export function test() {
    console.log('我是module1中的test函数', data.toLowerCase());
}
