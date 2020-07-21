# 原生 Ajax

## Ajax 简介

AJAX 全称为 Asynchronous JavaScript And XML，就是异步的 JS 和 XML。

通过 AJAX 可以在浏览器中向服务器发送异步请求，最大的优势：无刷新获取数据。

AJAX 不是新的编程语言，不是新的一门独立的技术，而是一种使用现有标准的新方法。

## XML 简介

XML 可扩展标记语言。XML 被设计用来传输和存储数据。

XML 和 HTML 类似，不同的是 HTML 中都是预定义标签，而 XML 中没有预定义标签，全都是自定义标签，用来表示一些数据。

现在已经被 JSON 取代了。

## Ajax 的工作原理

Ajax 的工作原理相当于在用户和服务器之间加了一个中间层（Ajax 引擎），使用户操作与服务器响应异步化。

## Ajax 的特点

优点：

1. 可以无需刷新页面与服务器端进行通信
2. 允许你根据用户事件来更新部分页面内容

缺点：

1. 没有浏览历史，不能回退
2. 存在跨域问题
3. SEO 不友好

## Ajax 的使用

核心对象 XMLHttpRequest，AJAX 的所有操作都是通过该对象进行的。

使用步骤：

1. 创建 XMLHttpRequest 对象
2. 给该对象绑定一个事件监听，名称为：onreadystatechange。
3. 指定发请求的：方式、地址、参数。`xhr.open(method,url)`post 请求需要设置 post 请求所特有的请求头`xhr.setRequestHeader('content-type','application/x-ww-form-urlencoded)`
4. 发送请求。`xhr.send(body)`get 请求不传 body 参数，只有 post 请求使用。
5. 接收响应
    - `xhr.responseXML`接收 xml 格式的响应数据
    - `xhr.responseText`接收文本格式的响应数据

## Ajax 状态码

在创建 ajax 对象，配置 ajax 对象，发送请求，以及接收完服务器端响应数据，这个过程中的每一个步骤都会对应一个数值，这个数值就是 ajax 状态码。通过`xhr.readyState` 获取 Ajax 状态码

-   0：当 xhr 被实例化出来，状态就是 0，即：初始化状态。
-   1：请求还没有发出去，即：send 方法还没有被调用，依然可以修改请求头。
-   2：请求已经发出去了，即：send 方法已经被调用了，不能再修改请求头，响应首行和响应头已经回来了。
-   3：数据回来了(但是数据可能不完整，如果数据小，会在此阶段直接接收完毕，数据大有待于进一步接收)
-   4：数据完全回来了

## 低版本 IE 浏览器的缓存问题

在低版本的 IE 浏览器中，Ajax 请求有严重的缓存问题，即在请求地址不发生变化的情况下，只有第一次请求会真正发送到服务器端，后续的请求都会从浏览器的缓存中获取结果。即使服务器端的数据更新了，客户端依然拿到的是缓存中的旧数据。

解决方案：在请求地址的后面加请求参数，保证每一次请求中的请求参数的值不相同。 最好加时间戳。

```js
xhr.open('get', 'http://www.example.com?t=' + Date.now());
```

# 跨域

跨域出现的是浏览器为了安全，而采用的同源策略（Same origin policy）

同源策略是由网景公司提出的一个著名的安全策略，现在所有支持 JavaScript 的浏览器都会使用这个策略。

web 是构建在同源策略基础之上的，浏览器只是针对同源策略的一种实现。

所谓同源是指：协议、域名（IP）、端口必须要完全相同，即：协议、域名（IP）、端口都相同，才能算是在同一个域里。

非同源受到的限制：

1. cookie 不能读取
2. DOM 无法获得
3. Ajax 请求不能发送

## 解决跨域

### JSONP

JSONP（JSON with Padding）是一个非官方的跨域解决方案，纯粹凭借程序员的聪明才智开发出来（利用了标签请求资源不受同源策略限制的特点），JSONP 需要前后端人员互相配合，只支持 get 请求。

在网页有一些标签天生具有跨域能力，比如：img、link、iframe、script。

JSONP 就是利用 script 标签的跨域能力来发送请求的。

```js
let btn = document.getElementById('btn');
btn.onclick = function () {
    // 1.动态创建script节点
    let scriptNode = document.createElement('script');
    // 2.定义一个接收数据的函数
    window.getData = function (data) {
        console.log(data);
    };
    // 3.利用标签把请求发出去
    scriptNode.src = 'http://localhost:3000/get?callback=getData';
    // 4.将标签放入页面，目的是把请求发出去
    document.body.appendChild(scriptNode);
};
```

```js
const express = require('express');

const app = express();

app.get('/get', (req, res) => {
    let arr = [
        { name: 'sunny', age: 18 },
        { name: 'Tom', age: 20 }
    ];
    console.log(req.query);
    let { callback } = req.query;
    res.send(`${callback}(${JSON.stringify(arr)})`);
});

app.listen(3000, err => {
    if (!err) console.log('ok');
    else console.log(err);
});
```

### CORS

CORS（Cross-Origin Resource Sharing），跨域资源共享。CORS是官方的跨域解决方案，它的特点是不需要在客户端做任何特殊的操作，完全在服务器中进行处理，支持get和post请求。

CORS是通过设置一个响应头来告诉浏览器，该请求允许跨域，浏览器收到该响应以后就会对响应放行。

CORS主要是服务器端的设置：通过res来设置响应头，来允许跨域请求`res.set('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');`

```js
app.get('/cors-get', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.send('我是服务器响应的get信息');
});

app.post('/cors-post', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.send('我是服务器响应的post信息');
});
```

