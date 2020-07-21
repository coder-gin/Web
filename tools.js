/**
 *
 *
 * @param {*} ele
 * @param {*} prop
 * @returns 返回ele元素的prop的属性值
 */
function getStyle (ele, prop) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(ele, null)[prop]
    } else {
        return ele.currentStyle[prop]
    }
}

/**
 *
 * @method 匀速动画
 * @param {*} ele
 * @param {*} obj {属性: 值}
 * @param {*} fn 动画结束后是否执行其它函数
 */
function linearAnimation (ele, obj, fn) {
    ele.timer = setInterval(function () {
        let flag = true // flag变量用于标记是否所有的属性都执行完了动画
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                let target = obj[key],
                    style = getComputedStyle(ele),
                    begin = parseFloat(style[key]) || 0,
                    step = begin - target > 0 ? -10 : 10 // 定义变量记录步长
                begin += step
                if (Math.abs(target - begin) > Math.abs(step)) {
                    flag = false
                } else {
                    begin = target
                }
                ele.style[key] = begin + 'px'
            }
        }
        if (flag) {
            clearInterval(ele.timer)
            fn && fn()
        }
    }, 50)
}

/**
 *
 * @method 缓动动画
 * @param {*} ele
 * @param {*} obj {属性: 值}
 * @param {*} fn 动画结束后是否执行其它函数
 */
function easeAnimation (ele, obj, fn) {
    clearInterval(ele.timer)
    ele.timer = setInterval(function () {
        let flag = true
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                let target = obj[key],
                    style = getComputedStyle(ele),
                    begin = parseFloat(style[key]) || 0,
                    step = (target - begin) * 0.3 // (结束位置 - 开始位置) * 缓动系数(0 ~1)
                begin += step
                if (Math.abs(Math.floor(step)) > 1) {
                    flag = false
                } else {
                    begin = target
                }
                ele.style[key] = begin + 'px'
            }
        }
        if (flag) {
            clearInterval(ele.timer)
            fn && fn()
        }
    }, 50)
}

/**
 *
 *
 * @returns 网页可视区域宽高
 */
function getViewportOffset () {
    if (window.innerWidth) {
        return {
            w: window.innerWidth,
            h: window.innerHeight
        }
    } else if (document.compatMode === 'CSS1Compat') {
        return {
            w: document.documentElement.clientWidth,
            h: document.documentElement.clientHeight
        }
    } else {
        return {
            w: document.body.clientWidth,
            h: document.body.clientHeight
        }
    }
}

/**
 *
 *
 * @returns 滚动条的滚动距离
 */
function getScrollOffset () {
    if (window.pageXOffset) {
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    } else {
        // 这两个兼容性比较混乱，其中一个有值，另外一个的值一定是 0。这两个最好的用法是取两个值相加，因为不可能存在两个同时有值
        return {
            x: document.documentElement.scrollLeft + document.body.scrollLeft,
            y: document.documentElement.scrollTop + document.body.scrollTop
        }
    }
}

/**
 *
 * @method 函数防抖
 * @param {*} fn
 * @param {number} [delay=1000] 定时器执行时间
 * @returns 返回fn执行
 */
function debounce (fn, delay) {
    let timer = null
    return function () {
        let that = this,
            args = arguments
        timer && clearTimeout(timer)
        timer = setTimeout(function () {
            fn.apply(that, args)
        }, delay || 1000)
    }
}

/**
 *
 * @method 函数节流
 * @param {*} fn
 * @param {number} [delay=1000]
 * @returns 返回fn执行
 */
function throttle (fn, delay) {
    let timer = null,
        flag = true
    return function () {
        if (!flag) return
        flag = false
        let that = this,
            args = arguments
        timer && clearTimeout(timer)
        timer = setTimeout(function () {
            flag = true
            fn.appley(that, args)
        }, delay || 1000)
    }
}

/**
 * @method 兼容性的事件处理
 * @param {*} elem 
 * @param {*} type 事件类型
 * @param {*} handle 
 */
function addEvent (elem, type, handle) {
    if (elem.addEventListener) {
        elem.addEventListener(type, handle, false)
    } else if (elem.attachEvent) {
        elem.attachEvent('on' + type, function () {
            handle.call(elem)
        })
    } else {
        elem['on' + type] = handle
    }
}

function stopBubble (event) {

}

function cancelHandler (event) { }