1. 插件版本问题：
   注意插件版本：4 不能使用 3 的相关方法以及回调函数

2. 设置 swiper 内容超出行向纵向滚动

```html
（必须项）设置swiper-slide的overflow属性 .swiper-slide { overflow: auto;
-webkit-overflow-scrolling: touch; }
```

此外还需要引入 js 代码，否则会没有效果

```js
var startScroll, touchStart, touchCurrent;
allSwiper.slides.on(
  "touchstart",
  function (e) {
    startScroll = this.scrollTop;
    touchStart = e.targetTouches[0].pageY;
  },
  true
);
allSwiper.slides.on(
  "touchmove",
  function (e) {
    touchCurrent = e.targetTouches[0].pageY;
    var touchesDiff = touchCurrent - touchStart;
    var slide = this;
    var onlyScrolling =
      slide.scrollHeight > slide.offsetHeight && //allow only when slide is scrollable
      ((touchesDiff < 0 && startScroll === 0) || //start from top edge to scroll bottom
      (touchesDiff > 0 &&
        startScroll === slide.scrollHeight - slide.offsetHeight) || //start from bottom edge to scroll top
        (startScroll > 0 &&
          startScroll < slide.scrollHeight - slide.offsetHeight)); //start from the middle
    if (onlyScrolling) {
      e.stopPropagation();
    }
  },
  true
);
```

## initialSlide：设定初始化时 slide 的索引。

也就是初次显示的位置

## onSlidePrevEnd(swiper)

swiper 切换结束执行的参数

## onSlideNextStart(swiper)

    回调函数，滑块释放时如果触发slider向前(右、下)切换则执行。类似于onSlideChangeStart，但规定了方向。
    slider切换到下一张执行的参数

## beforeDestroy()

回调函数，销毁 Swiper 时执行。
