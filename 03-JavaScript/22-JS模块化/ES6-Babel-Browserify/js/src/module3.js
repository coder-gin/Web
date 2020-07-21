// 默认暴露 只能暴露一次
let person = {
    name: 'kobe',
    age: 18,
    speak() {
        setTimeout(() => {
            console.log(`我的名字是${this.name},我的年龄是${this.age}岁`);
        }, 1000);
    }
};
export default person;
