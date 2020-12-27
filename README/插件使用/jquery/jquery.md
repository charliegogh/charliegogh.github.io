## jQuery outerHeight() 方法
定义：返回元素的高度，包括padding和border
实例：在制作瀑布流中，使用outerHeight来返回整个容器的高度，图片与图片之间不会出现缝隙。

## scrollTop() 
 设置 <div> 元素中滚动条的垂直偏移：
 实例：可做滚动触发;回顶部
 
 
## 实现jq瀑布流的思想




## 一些数组的相关操作
concat  用于连接两个或者多个数组
push在数组的末尾添加元素
shift()  删除数组的第一个元素，并返回该元素



## 以动态创建对象形式遍历json字符串
  思路：创建对象，aa={bb:[]}
  json 遍历方法总结
 
## 现在css和js滚动指南

## attr()设置或者返回被选元素的属性值   
    设置属性值语法：$(selector).attr(attribute,value)

## empty（）删除节点元素，但是只会删除节点元素的值，不会删除整个节点，可用来解决再次点击重新获取，以免覆盖。。

## jq动态添加动向到event对象中
   实例： $('e').on('click',{bol:flase})



## append()和html()区别<br/>



append()是在html追加一些元素，而html()是替换html中的元素。<br/>
如果在获取后台一组数据并进行遍历进行数据渲染，如果用html()只会获取一个组数据




### 、解决jquery中动态新增的元素节点无法触发事件问题的两种方法

(1)使用live函数
$('.liLabel').live('click', function(){
 alert('OK');
});<br/>
(2)使用on函数,通过on方法绑定事件，可以绑定到它的父级或者body中<br/>
```html
$("#ulLabel").on('click','.liLabel',function(){
 alert('OK')
});
或者：
$("body").on('click','.liLabel',function(){
 alert('OK')
});
```



  

  

