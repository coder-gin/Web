# axios 特点

1. 基本 promise 的异步 ajax 请求库
2. 浏览器端/node 端都可以使用
3. 支持请求／响应拦截器
4. 支持请求取消
5. 请求/响应数据转换
6. 批量发送多个请求

# axios 常用语法

- axios(config): 通用/最本质的发任意类型请求的方式
- axios(url[, config]): 可以只指定 url 发 get 请求
- axios.request(config): 等同于 axios(config)
- axios.get(url[, config]): 发 get 请求
- axios.delete(url[, config]): 发 delete 请求
- axios.post(url[, data, config]): 发 post 请求
- axios.put(url[, data, config]): 发 put 请求
- axios.defaults.xxx: 请求的默认全局配置
- axios.interceptors.request.use(): 添加请求拦截器
- axios.interceptors.response.use(): 添加响应拦截器
- axios.create([config]): 创建一个新的 axios

# 发送基本请求

## get 请求

```js
axios
  .get("http://152.136.185.210:8000/api/n3/home/data", {
    params: {
      type: "pop",
      page: 3,
    },
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

## 发送并发请求

有时候,我们可能需求同时发送两个请求

- 使用 axios.all,可以放入多个请求的数组.
- `axios.all([])`返回的结果是一个数组，使用 axios.spread 可将数组 [res1,res2] 展开为 res1,res2

```js
axios
  .all([
    axios({
      url: "http://123.207.32.32:8000/home/multidata",
    }),
    axios({
      url: "http://152.136.185.210:8000/api/n3/home/data",
      params: {
        type: "pop",
        page: 1,
      },
    }),
  ])
  .then(
    axios.spread((res1, res2) => {
      console.log(res1);
      console.log(res2);
    })
  );
```

## 全局配置

在上面的示例中,我们的 BaseURL 是固定的

- 事实上,在开发中可能很多参数都是固定的.
- 这个时候我们可以进行一些抽取,也可以利用 axios 的全局配置

```js
axios.defaults.baseURL = ‘123.207.32.32:8000’axios.defaults.headers.post[‘Content-Type’] = ‘application/x-www-form-urlencoded’;
```

# axios 的实例

当我们从 axios 模块中导入对象时，使用的实例是默认的实例。当给该实例设置一些默认配置时，这些配置就被固定下来了。但是后续开发中，某些配置可能会不太一样

比如某些请求需要使用特定的 baseURL 或者 timeout 或者 content-Type 等，这个时候，我们就可以创建新的实例，并且传入属于该实例的配置信息

```js
const instance1 = axios.create({
  baseURL: "http://152.136.185.210:8000/api/n3",
  timeout: 5000,
});

instance1({
  url: "/home/multidata",
}).then((res) => console.log(res));

const instance2 = axios.create({
  baseURL: "http://123.207.32.32:8000",
});
instance2({
  url: "/home/multidata",
}).then((res) => console.log(res));
```

# 拦截器

axios 提供了拦截器，用于我们在发送每次请求或者得到相应后，进行对应的处理。

```js
const instance = axios.create({
  baseURL: "http://152.136.185.210:8000/api/n3",
  timeout: 10000,
});

// 请求拦截
instance.interceptors.request.use(
  (config) => {
    console.log(config);
    return config;
  },
  (err) => {
    console.log(err);
  }
);

// 响应拦截
instance.interceptors.response.use(
  (res) => {
    // console.log(res);
    return res.data;
  },
  (err) => {
    console.log(err);
  }
);
```

响应拦截中完成的事情：

- 响应的成功拦截中，主要是对数据进行过滤。
- 响应的失败拦截中，可以根据 status 判断报错的错误码，跳转到不同的错误提示页面。
