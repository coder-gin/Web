# Vue 开篇

Vue.js 是一套构建用户界面的`框架`，它不仅易于上手，还可以与其它第三方库整合(Swiper、IScroll、...)。

框架：是一套完整的解决方案；对项目的`侵入性`较大，项目如果需要更换框架，则需要重构整个项目。

库（插件）：提供某一个小功能，对项目的`侵入性`较小，如果某个库无法完成某些需求，可以很容易切换到其它库实现需求。

- 从 jQuery 切换到 Zepto， 无缝切换
- 从 IScroll 切换到 ScrollMagic， 只需要将用到 IScroll 的代码替换成 ScrollMagic 代码即可

Vue 优势：

- 通过数据驱动界面更新， 无需操作 DOM 来更新界面
- 使用 Vue 我们只需要关心如何获取数据， 如何处理数据， 如何编写业务逻辑代码，我们只需要将处理好的数据交给 Vue， Vue 就会自动将数据渲染到模板中(界面上)

# Vue 基本模板

1. 引入 Vue.js。`<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>`
2. 创建一个 Vue 的实例对象
3. 告诉 Vue 的实例对象， 将来需要控制界面上的哪个区域
4. 告诉 Vue 的实例对象， 被控制区域的数据是什么

```js
let vue = new Vue({
  // 3.告诉Vue的实例对象， 将来需要控制界面上的哪个区域
  el: "#app"，
  // 4.告诉Vue的实例对象， 被控制区域的数据是什么
  data: {
    name: "sunny"，
  }，
});
```

# MVVM 设计模式

在 MVVM 设计模式中由 3 个部分组成

- M : Model。数据模型(保存数据， 处理数据业务逻辑)
- V : View。视图(展示数据， 与用户交互)
- VM: View Model。数据模型和视图的桥梁(M 是中国人， V 是美国人， VM 就是翻译)

MVVM 设计模式最大的特点就是支持数据的双向传递

数据可以从 M -> VM -> V

也可以从 V -> VM -> M

Vue 其实是基于 MVVM 设计模式的

- 被控制的区域: View
- Vue 实例对象 : View Model
- 实例对象中的 data: Model

```html
<!-- 这里就是MVVM中的View -->
<div id="app">
  <h1>{{msg}}</h1>
</div>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
  // 这里就是MVVM中的View Model
  new Vue({
    el: "#app",

    // 这里就是MVVM中的Model
    data: {
      msg: "hello vue.js",
    },
  });
</script>
```
