# JSON

JSON 是一种传输数据的格式（以对象为样板，本质上就是对象，但用途有区别， 对象就是本地用的，json 是用来传输的）

- `JSON.parse();` string — > json
- `JSON.stringify();` json — > string

json 的属性名必须加双引号(传的是二进制文本)

# 异步加载 js

js 是单线程的，会阻断 HTML，css 加载（因为 js 会修改 html 和 css 一起加载会乱）， 所以是同步加载 js。先下载 js，再下载 HTML 和 css。常规来说 js 是同步加载的，所 以我们讲讲 js 异步加载的情况

js 加载的缺点：加载工具方法没必要阻塞文档，过得 js 加载会影响页面效率， 一旦网速不好，那么整个网站将等待 js 加载而不进行后续渲染等工作。

有些工具方法需要按需加载，用到再加载，不用不加载。

javascript 异步加载的三种方案

1. defer 异步加载，但要等到 dom 文档全部解析完（dom 树生成完）才会被执行。 只有 IE 能用。
   - dom 文档全部解析完，不代表整个页面加载完
2. async 异步加载，加载完就执行，async 只能加载外部脚本，不能把 js 写在 script 标签里。ie9 以上可以用，w3c 标准
   - 1 和 2 执行时也不阻塞页面
3. 创建 script，插入到 DOM 中，加载完毕后 callBack（按需加载，方便）→ 常用

# js 加载时间线（可以理解成浏览器加载时间线）

js 加载时间线：依据 js 出生的那一刻起，记录了一系列浏览器按照顺序做的事（就 是一个执行顺序）

js 时间线步骤（创建 document 对象==>文档解析完==>文档解析完加载完执行完）

1. 创建 Document 对象，开始解析 web 页面。解析 HTML 元素和他们的文本内容
   后添加 Element 对象和 Text 节点到文档中。这个阶段 document.readyState = 'loading'。
2. 遇到 link 外部 css，创建线程，进行异步加载，并继续解析文档。
3. 遇到 script 外部 js，并且没有设置 async、defer，浏览器同步加载，并阻塞，等 待 js 加载完成并执行该脚本，然后继续解析文档。
4. 遇到 script 外部 js，并且设置有 async、defer，浏览器创建线程异步加载，并继续解析文档。
   - 对于 async 属性的脚本，脚本加载完成后立即执行。（异步禁止使用 document.write()， 因为当你整个文档解析到差不多，再调用 document.write()，会把之前所有的文档流 都清空，用它里面的文档代替）
5. 遇到 img 等（带有 src），先正常解析 dom 结构，然后浏览器异步加载 src，并继 续解析文档。 看到标签直接生产 dom 树，不用等着 img 加载完 scr。
6. 当文档解析完成（domTree 建立完毕，不是加载完毕），document.readyState = 'interactive'。
7. 文档解析完成后，所有设置有 defer 的脚本会按照顺序执行。（注意与 async 的不 同,但同样禁止使用 document.write()）;
8. document 对象触发 DOMContentLoaded 事件，这也标志着程序执行从同步脚本 执行阶段，转化为事件驱动阶段。
9. 当所有 async 的脚本加载完成并执行后、img 等加载完成后（页面所有的都执行 加载完之后），document.readyState = 'complete'，window 对象触发 load 事件。
10. 从此，以异步响应方式处理用户输入、网络事件等。
