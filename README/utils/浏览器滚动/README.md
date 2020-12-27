####
 如何设置全局滚动条高度

1. 最常用的方法
```js
window.scrollTo(0, 0);

// or
window.scrollTo({
  left: 0,
  top: 100
});
```

2. 也可以利用相对滚动设置：
````js
window.scrollBy(0, 0);

// or
window.scrollBy({
  left: 0,
  top: 100
});
````
3. 或者利用scrollTop设置：
```js
document.scrollingElement.scrollTop = 100;
```


#### 如何指定一个元素显示在视窗

1. 最常用的方法：
```js
// 获取元素的offsetTop(元素距离文档顶部的距离)
let offsetTop = document.querySelector(".box").offsetTop;

// 设置滚动条的高度
window.scrollTo(0, offsetTop);
```
2. 或者用锚点：
```html
<a href="#box">盒子出现在顶部</a>
<div id="box"></div>
```
3. 或者利用scrollIntoView进行展现：   ?????????????????????????????????????????
```js
document.querySelector(".box").scrollIntoView();
```
还可以指定元素的出现位置：
```js
// start出现在视口顶部、center出现在视口中央、end出现在视口底部
document.querySelector(".box").scrollIntoView({
  block: "start" || "center" || "end"
});
```

#### 如何设置滚动具有平滑的过渡效果
1. 利用每个方法的参数设置：
```js
window.scrollTo({
  behavior: "smooth"
});

window.scrollBy({
  behavior: "smooth"
});

document.querySelector(".box").scrollIntoView({
  behavior: "smooth"
});
```
2. 用css属性设置：
```css
html {
  scroll-behavior: smooth; // 全局滚动具有平滑效果
}
// 或者所有
* {
 scroll-behavior: smooth;
}
```




#### 一些有趣的东西
1. scrollingElement
该对象可以非常兼容地获取scrollTop、scrollHeight等属性，在移动端跟PC端都屡试不爽，还记得当初写这个兼容性方法：
```js
let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
```
现在只需要：
```js
let scrollHeight = document.scrollingElement.scrollHeight;
```

2. 滚动到底部
```js
window.scrollTo({
  left: 0,
  top: document.scrollingElement.scrollHeight
});

window.scrollTo(0, 999999);
```

> 平滑滚动到顶部或者底部自己加参数或者属性即可

3. 判断浏览器已滚动到底部
```js
window.addEventListener("scroll", () => {
  let {
    scrollTop,
    scrollHeight,
    clientHeight
  } = document.scrollingElement;
  
  // 当前滚动高度 + 视口高度 >= 文档总高度
  if (scrollTop + clientHeight >= scrollHeight) {
    console.log("已到达底部");
  }
});
```
4. 函数节流
```js
window.addEventListener("scroll", throttle(() => console.log("我在滚我在滚！")));
```
throttle源码：(用处：减少代码执行频率)
```js
function throttle(fn, interval = 500) {
  let run = true;

  return function () {
    if (!run) return;
    run = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      run = true;
    }, interval);
  };
}
```

5. 函数防抖     
debounce源码：（用处：判断某个动作结束，如刚刚的滚动结束、input输入结束等）
```js
function debounce(fn, interval = 500) {
  let timeout = null;

  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, interval);
  };
}
```

6. 解决IOS设备局部滚动不顺畅(粘手)

```css
.box {
  -webkit-overflow-scrolling: touch;
}
```

7. 滚动传播
指有多个滚动区域，当一个滚动区域滚动完之后，继续滚动会传播到到父区域继续滚动的行为：
```css
.box {
  overscroll-behavior: contain; // 阻止滚动传播
}

```

8. 横向滚动

移动端遇到此需求比较多，常用于图片展示：
```html
<ul>
  <li>
    <img src="">
  </li>
  // ...
</ul>

ul {
  white-space: nowrap; // 超出不换行
  overflow-x: auto;

  li {
    display: inline-block;

    img {
      display: block;
      width: 200px;
    }
  }
}
```

9. 滚动结束后，强制滚动到指定元素

```css
ul {
  scroll-snap-type: x mandatory;
  
  li {
    scroll-snap-align: start;
  }
}
```
也可以设置出现在中间：

```css
li {
  scroll-snap-align: center;
}
```

