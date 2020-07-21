# 基本动画

**show**、**hide**、**toggle**

`show([s,[e],[fn]])`、`hide([s,[e],[fn]])`、`toggle([s],[e],[fn])`

参数：

-   `speed`: 三种预定速度之一的字符串("slow","normal", or "fast")或表示动画时长的毫秒数值(如：1000)
-   `easing`: (Optional) 用来指定切换效果，默认是"swing"，可用参数"linear"
-   `fn`: 在动画完成时执行的函数，每个元素执行一次。

# 滑动

**slideDown**、**slideUp**、**slideToggle**

`slideDown([s],[e],[fn])`、`slideUp([s,[e],[fn]])`、`slideToggle([s],[e],[fn])`

# 淡入淡出

`fadeIn([s],[e],[fn])`、`fadeOut([s],[e],[fn])`、`fadeToggle([s,[e],[fn]])`、`fadeTo([[s],o,[e],[fn]])`、

-   `speed`:三种预定速度之一的字符串("slow","normal", or "fast")或表示动画时长的毫秒数值(如：1000)
-   `easing`:(Optional) 用来指定切换效果，默认是"swing"，可用参数"linear"
-   `fn`:在动画完成时执行的函数，每个元素执行一次。

# 自定义动画

`animate(p,[s],[e],[fn])`

-   第一个参数: 接收一个对象, 可以在对象中修改属性
-   第二个参数: 指定动画时长
-   第三个参数: 指定动画节奏, 默认就是 swing
-   第四个参数: 动画执行完毕之后的回调函数

`delay(d,[q])`设置一个延时来推迟执行队列中之后的项目

`stop([c],[j])`停止所有在指定元素上正在运行的动画。

stop 方法参数为：

-   `stop();` `stop(false);` `stop(false, false);`立即停止当前动画, 继续执行后续的动画
-   `stop(true);` `stop(true, false);`立即停止当前和后续所有的动画
-   `stop(false, true);`立即完成当前的, 继续执行后续动画
-   `stop(true, true);`立即完成当前的, 并且停止后续所有的
