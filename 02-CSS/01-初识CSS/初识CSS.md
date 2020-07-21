# 基本概念

CSS 的作用是：可以给网页中的每一个元素设置样式（“化妆”、排版布局），让网页更加精美

完全没有使用 CSS 的网页：基本就是一堆从上到下、从左到右挨在一起的文字和图片

CSS 的全称是 Cascading Style Sheets，层叠样式表

CSS 样式的书写格式

```css
color: red;
```

冒号:左边是样式名，冒号:右边是样式值

CSS 提供了 3 种方法，可以将 CSS 样式应用到元素上

- 内联样式（inline style）：将样式直接写在元素的 style 属性上
  ```html
  <div style="color:red;font-size:50px;">Hello World！</div>
  ```
- 文档样式表（document style sheet）、内嵌样式表（embed style sheet）
  ```html
  <style>
    div {
      color: palegreen;
      font-size: 60px;
    }
  </style>
  ```
  <style>元素的type属性值默认是text/css
- 外部样式表（external style sheet）：将样式写在单独的 CSS 文件中，然后在当前网页的 head 元素中用 link 元素引用`<link rel="stylesheet" href="index.css">`

可以在 style 元素或者 CSS 文件中使用@import 导入其他的 CSS 文件。不建议使用@import 导入 CSS 文件，它的效率比 link 元素低

CSS 的注释和 HTML 的注释是不一样的：`/* 注释内容 */（不能嵌套）`

HTML 和 CSS 的编写准则

在编写 HTML 和 CSS 代码过程中，要遵守一个准则：结构、样式分离

因此，不要使用 HTML 元素的属性来给元素添加样式，比如 body 的 bgcolor、img 的 width\height 等

link 元素除了可以用来引入 CSS 文件，还可以设置网页的图标（href 的值是图标链接）

- link 元素的 rel 属性不能省略，用来指定文档与链接资源的关系
- 一般 rel 若确定，相应的 type 也会默认确定，所以可以省略 type
- 网页图标支持的图片格式是 ico、png，常用大小是 16x16、24x24、32x32（单位：像素）

# CSS 简史

CSS 1 -> CSS 2 -> CSS 2.1 -> CSS 2.2

CSS 3：是 CSS 2.x 以后对某一些 CSS 模块进行升级更新后的称呼，比如 CSS Color Module Level 3、Selectors Level 3、CSS Namespaces Module Level 3。目前并不存在真正意义的 CSS 3

CSS 4：是 CSS 2.x 以后对某一些 CSS 模块进行升级更新后的称呼，比如 CSS Color Module Level 4、Selectors Level 4、CSS Text Module Level 4。目前并不存在真正意义的 CSS 4

常用 CSS 属性，按照 CSS 属性的具体用途，大致可以分类为：

- 文本：`color、direction、letter-spacing、word-spacing、line-height、text-align、text-indent、text-transform、text-decoration、white-space`
- 字体：`font、font-family、font-style、font-size、font-variant、font-weight`
- 背景：`background、background-color、background-image、background-repeat、background-attachment、background-position`
- 盒子模型：`width、height、border、margin、padding`
- 列表：`list-style`
- 表格：`border-collapse`
- 显示：`display、visibility、overflow、opacity、filter`
- 定位： `vertical-align、position、left、top、right、bottom、float、clear`

官方文档地址：

https://www.w3.org/standards/techs/css

https://www.w3.org/TR/CSS22/

https://www.w3.org/TR/CSS22/propidx.html

由于浏览器版本、CSS 版本等问题，有些 CSS 属性是无法使用的

可以到https://caniuse.com/查询CSS属性的可用性

# 最常用的 CSS 属性

要想深刻理解所有常用 CSS 属性，最好先学会以下几个最基础最常用的 CSS 属性

> color：前景色（文字颜色），用来设置文本内容的前景色，包括文字、装饰线、边框、外轮廓等的颜色
> background-color：背景色
> width ：宽度
> height：高度
> font-size：文字大小

# 颜色属性

在 CSS 中如何通过 color 属性来修改文字颜色

格式: color: 值;

取值:

- 英文单词

  一般情况下常见的颜色都有对应的英文单词, 但是英文单词能够表达的颜色是有限制的, 也就是说不是所有的颜色都能够通过英文单词来表达

- rgb

  rgb 其实就是三原色, 其中 r(red 红色) g(green 绿色) b(blue 蓝色)

  格式: rgb(0,0,0)

  这个格式中的第一个数字就是用来设置三原色的光源元件红色显示的亮度，第二个数字就是用来设置三原色的光源元件绿色显示的亮度，第三个数字就是用来设置三原色的光源元件蓝色显示的亮度。这其中的每一个数字它的取值是 0-255 之前, 0 代表不发光, 255 代表发光, 值越大就越亮。

  红色: rgb(255,0,0);

  绿色: rgb(0,255,0);

  蓝色: rgb(0,0,255);

  黑色: rgb(0,0,0);

  白色: rgb(255,255,255);

  在前端开发中其实并不常用黑色，只要让红色/绿色/蓝色的值都一样就是灰色。而且如果这三个值越小那么就越偏黑色, 越大就越偏白色

- rgba

  a 代表透明度, 取值是 0-1, 取值越小就越透明

- 十六进制

  在前端开发中通过十六进制来表示颜色, 其实本质就是 RGB。十六进制中是通过每两位表示一个颜色

  在 CSS 中只要十六进制的颜色每两位的值都是一样的, 那么就可以简写为一位

  在 CSS 中只要十六进制的颜色每两位的值都是一样的, 那么就可以简写为一位

关键字 transparent 等价于 rgba(0, 0, 0, 0)，完全透明
