# webpack 核心概念

Webpack 是一个模块打包器(bundler)。

在 Webpack 看来，前端的所有资源文件(js/json/css/img/less/...)都会作为模块处理

它将根据模块的依赖关系进行静态分析，生成对应的静态资源

四个核心概念：

- Entry：入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。
- Output：output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist。
- Loader：loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只能解析： JavaScript、json）
- Plugins：插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等

Webpack 本身只能加载 JS/JSON 模块，如果要加载其他类型的文件(模块)，就需要使用对应的 loader 进行转换/加载

Loader 本身也是运行在 node.js 环境中的 JavaScript 模块，它本身是一个函数，接受源文件作为参数，返回转换的结果

loader 一般以 xxx-loader 的方式命名，xxx 代表了这个 loader 要做的转换功能，比如 json-loader。

插件件可以完成一些 loader 不能完成的功能。插件的使用一般是在 webpack 的配置信息 plugins 选项中指定。

CleanWebpackPlugin: 自动清除指定文件夹资源

HtmlWebpackPlugin: 自动生成 HTML 文件

UglifyJSPlugin: 压缩 js 文件

配置文件(默认)`webpack.config.js`: 是一个 node 模块，返回一个 json 格式的配置信息对象

# webpack 基本使用

1. 生成 package.json 文件
2. 安装 webpack（都要安装）：
   - npm install webpack@3 -g //全局安装
   - npm install webpack@3 --save-dev //局部安装
3. 小试牛刀处理一个 js。执行命令：webpack src/js/index.js build/index.js

观察发现 webpack 会把 es6 的模块化语法，直接编译为浏览器识别的模块化语法，不过类似于箭头函数等依然存在

# webpack 配置文件

webpack 的核心配置文件：执行 webpack 命令时，会在当前目录查找 webpack.config.js 文件读取配置

1. 通过 Commonjs 暴露出去一个对象
2. 四个关键的概念：
   - entry：入口文件，将所有打包资源全部引入
   - output：输出，将资源输出到指定目录下
   - loader：处理 webpack 不能够解析的模块
   - plugins：执行 loader 做不了的任务
3. 如何找到自己想要的 loader？
   - 优先去官网找自己想要的 loader，没有再去 npm 官网上找。
4. 在终端输入：`webpack ./src/js/app.js ./build/js/built.js`
   - 问题：这种方式只能够编译打包 js、json 文件，其他文件处理不了
5. `webpack --display-modules` 可以查看隐藏的任务

```js
const path = require('path'); //path内置的模块，用来设置路径。

module.exports = {
  //入口（从哪里进入开始解析）
  entry: './src/js/index.js',

  //出口（最终加工完的代码输出到哪里）
  output: {
    // 输出配置
    path: path.resolve(__dirname, 'build'), //输出文件路径配置
    filename: 'index.js' // 输出文件名
  }
};
```

## less-loader

使用 loader 解析 less 文件

安装`npm install less-loader less css-loader style-loader -D`

向 rules 中写入配置：

```js
{
  test: /\.less$/,
  use: [
    {
      loader: 'style-loader' // 创建一个style标签，将js中的css放入其中
    },
    {
      loader: 'css-loader' // 将css以CommonJs语法打包到js中
    },
    {
      loader: 'less-loader' // 将less转换成css
    }
  ]
}
```

在入口 js 中引入 less 文件：`import '../less/demo.less';`

## file-loader

处理图片资源

安装`npm install file-loader -D`

新增 loader：

```js
{
  test: /\.(png|jpg|gif)$/,
  use: [
    {
      loader: 'file-loader', // 如果不做图片转base64，可以用file-loader
      options: {
      outputPath: 'img', //图片最终输出的位置
      publicPath: '../dist/img', //css资源图片路径,由于将src当作根路径，所以需要翻出去。
      // 一个有意思的现象，在根目录下的index.html引入无所谓publicPath的路径，但是src下的index.html不一样
      name: '[hash:5].[ext]' //修改图片名称
      }
    }
  ]
}
```

## 在 package.json 中配置 npm 命令

```js
"scripts": {
  "build": "webpack"
},
// 打包应用运行:npm run build
```

## 使用插件提取 css,合并为单独的文件

安装 ExtractTextWebpackPlugin 插件：`npm install extract-text-webpack-plugin -D`

引入插件：`const ExtractTextPlugin = require("extract-text-webpack-plugin");`

新增 plugins 插件配置项，并实例化 ExtractTextPlugin 插件：

```js
plugins: [
  //提取css为单独文件
  new ExtractTextPlugin('./css/index.css')
];
```

修改原 less-loader 的配置如下：

```js
{
  test: /\.less$/, //匹配文件的规则，说明该loader对哪个文件生效
  use: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: ["css-loader","less-loader"]
  })
}
```

因为 css 提取成单独文件，不再包含在 js 中了，所以要修改 url-loader 配置 publicPath 为:'../img'

## es6 转 es5

安装 babel-loader，命令：`npm install babel-loader babel-core babel-preset-es2015 -D`

配置新的 loader：

```js
{
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['es2015']
    }
  }
}
```

坑！提示找不到"@babel/core"，根据提示执行：`npm i babel-loader@7 -D`

## html 文件的处理和清除文件夹
