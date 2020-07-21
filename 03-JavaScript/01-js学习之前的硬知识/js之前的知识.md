# 浏览器的内核

| 5 大主流浏览器 | 内核         |
| -------------- | ------------ |
| IE             | trident      |
| chrome         | webkit blink |
| safari         | webkit       |
| firefox        | gecko        |
| opera          | presto       |

# web 发展史

Mosaic，是互联网历史上第一个获普遍使用和能够显示图片的网页浏览器。于 1993
年问世。

1994 年 4 月，马克.安德森和 Silicon Graphics(简称为 SGI，中译为“视算科技”或“硅 图”)公司的创始人吉姆·克拉克(Jim Clark)在美国加州设立了“Mosaic Communication Corporation”。

Mosaic 公司成立后，由于伊利诺伊大学拥有 Mosaic 的商标权，且伊利诺伊大学已将 技术转让给 Spy Glass 公司，开发团队必须彻底重新撰写浏览器程式码，且浏览器名 称更改为 Netscape Navigator，公司名字于 1994 年 11 月改名为“Netscape Communication Corporation”，此后沿用至今，中译为“网景”。

微软的 Internet Explorer 及 Mozilla Firefox 等，其早期版本皆以 Mosaic 为基础而开发。 微软随后买下 Spy Glass 公司的技术开发出 Internet Explorer 浏览器，而 Mozilla Firefox 则是网景通讯家开放源代码后所衍生出的版本。

# js 历史

JavaScript 作为 Netscape Navigator 浏览器的一部分首次出现在 1996 年。它最初的设计目标是改善网页的用户体验。作者:Brendan Eich，起初 JavaScript 被命名为 LiveScript，后因和 Sun 公司合作，因市场宣传需要改名 JavaScript。后来 Sun 公司被 Oracle 收购，JavaScript 版权归 Oracle 所有。

# 浏览器组成

1. shell 部分——用户能操作部分（壳）
2. 内核部分——用户看不到的部分
   - 渲染引擎（语法规则和渲染）
   - js 引擎
   - 其他模块（如异步）

# js 引擎

2001 年发布 ie6，首次实现对 js 引擎的优化。

2008 年 Google 发布最新浏览器 Chrome，它是采用优化后的 javascript 引擎，引擎代 号 V8，因能把 js 代码直接转化为机械码来执行，进而以速度快而闻名。

后 Firefox 也推出了具备强大功能的 js 引擎 Firefox3.5 TraceMonkey(对频繁执行的代码做了路径优化)，Firefox4.0 JeagerMonkey

单线程：同一时间只能做一件事——js 引擎是单线程（(同一时间做很多事叫多线程)）

单线程 -> 模拟多线程

轮转时间片：短时间之内轮流执行多个任务的片段

1. 任务 1 任务 2
2. 切分任务 1 任务 2
3. 随机排列这些任务片段，组成队列
4. 按照这个队列顺序将任务片段送进 js 进程
5. js 线程执行一个又一个的任务片段

ECMA(欧洲计算机制造联合会)标注:为了取得技术优势，微软推出了 JScript， CEnvi 推出 ScriptEase，与 JavaScript 同样可在浏览器上运行。为了统一规格 JavaScript 兼容于 ECMA 标准，因此也称为 ECMAScript。
