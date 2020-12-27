# 使用库

## 工具汇总
- [前端常用插件、工具类库汇总](https://juejin.cn/post/6844903683411410951)

## css
- [animate](https://animate.style/)



## jq

- [Pinchzoom.js ](https://blog.csdn.net/forever_yours/article/details/54930106?locationNum=7&fps=1)
- [iE不支持placeholder问题](https://github.com/mathiasbynens/jquery-placeholder)

## vue

- [antV G6流程图在Vue中的使用](https://juejin.cn/post/6844903934620860424)

## 时间处理

### moment

- moment 计算俩日期相差多少天
```
    //获取当前时间
    let m1 = moment();
    //获取需要对比的时间
    let m2 = moment(time);
    //计算相差多少天 day可以是second minute
    day = m2.diff(m1, 'day');
```
