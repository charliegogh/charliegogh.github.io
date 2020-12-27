
一、常用的方法
1. 取值与赋值操作
```javascript
$("#ID").val(); //取value值
$("#ID").val("xxx"); //赋值
$("#ID").text(); //相当于取innerText
$("#ID").text(""); //相当于赋值给innerText
$("#ID").html(); //相当于取innerHTML
$("#ID").html(""); //相当于赋值给innerHTM
```
2. 属性设置
```javascript
$("#ID").attr(key,value);//取得或设置匹配元素的属性值
```
3. 显示和隐藏
```javascript
$("#ID").hide(); //隐藏
$("#ID").show(); //显示
```
4. 事件处理
```javascript
$(document).ready(fn);
$("#ID").bind(type,[data],fn); //绑定事件处理器函数
$("#ID").toggle(fn,fn);//注册每次点击时切换要调用的函数
```
5. 外观效果
```javascript
$("#ID").addClass(class);//添加样式
$("#ID").removeClass(class);//移除样式
$("#ID").css(name,value);//设置一个样式属性的值

```
6. 查找和遍历筛选 
```javascript
$("#ID").map(callback);//将一组元素转换成其他数组
$("#ID").find(expr);//搜索所有与指定表达式匹配的元素
$("#ID").children();//获得匹配元素集合中每个元素的所有子元素
$("#ID").parent();//获得当前匹配元素集合中每个元素的祖先元素
$("#ID").parents();//获得当前匹配元素集合中每个元素的父元素
$("#ID").filter();//将匹配元素集合缩减为匹配选择器或匹配函数返回值的新元素
$("#ID").not();//从匹配元素集合中删除元素
$("#ID").add();//将元素添加到匹配元素的集合中
$("#ID").slice();//将匹配元素集合缩减为指定范围的子集
$("#ID").siblings();   //获得匹配元素集合中所有元素的同辈元素
$("#ID").prev() & prevAll();//获得匹配元素集合中每个元素紧邻的前一个/所有同辈元素
$("#ID").next() & nextAll();//获得匹配元素集合中每个元素紧邻的一个/所有同辈元素

```
7. 元素节点操作
   
```javascript
$("#ID").wrap(html);//把所有匹配的元素用其他元素的结构化标记包裹起来
$("#ID").empty();//删除匹配的元素集合中所有的子节点

```
8. Ajax操作
   
```javascript
$("#ID").load(url,[data],[callback]);//载入远程 HTML 文件代码并插入至 DOM 中
//url (String) : 待装入 HTML 网页网址。
//data (Map) : (可选) 发送至服务器的 key/value 数据。
//callback (Callback) : (可选) 载入成功时回调函数。
jQuery.ajax();//返回其创建的XMLHttpRequest对象。只有一个参数,参数是key/value 对象，包含各配置及回调函数信息。

```
9. 序列化
   
```javascript
 $("form").serialize();//序列化表格内容为字符串

```
10. 工具方法(jQuery可以使用$代替) 
```javascript
jQuery.each(obj,callback);//遍历对象和数组
jQuery.map();//修改数据
jQuery.grep();//数据筛选,返回一个经过筛选后的数组
jQuery.inArray(value,array);//查找元素的下标
jQuery.merge(array1,array2);//合并两个数组
jQuery.unique(dom);//去除重复DOM元素
jQuery.makeArray(obj);//将类数组对象转换为数组对象
jQuery.trim(str);//去掉字符串起始和结尾的空格
jQuery.contains(dom1,dom2);//dom1节点是否包含dom2节点
jQuery.type();//返回对象的数据类型
jQuery.isArray();//是否为数组。
jQuery.isEmptyObject();//是否为空对象（不含可枚举的属性）。
jQuery.isFunction();//否为函数。
jQuery.isNumeric();//是否为数组。
jQuery.isPlainObject();//是否为使用“{}”或“new Object”生成的对象，而不是浏览器原生提供的对象。
jQuery.isWindow();//是否为window对象。
jQuery.isXMLDoc();//判断一个DOM节点是否处于XML文档之中。
jQuery.param(object);//将对象的键值对转化为URL键值对字符串形式
```
```javascript
jQuery.proxy();//调整this的指向    
```
11. 尺寸相关、滚动事件
$("#ID").offset()//获取元素相对于页面的绝对位置
$(window).height();//获取可视区域高度
$(document).height();//获取页面高度
$(document).scrollTop(); $(document).scrollLeft();//获取页面滚动距离
$(window).scroll(function(){ ...... })//页面滚动事件


二、操作指南（标准）
1. 避免全局变量
```javascript
// 糟糕 
$element = $('#element'); 
h = $element.height(); 
$element.css('height',h-20); 
 
// 建议 
var $element = $('#element'); 
var h = $element.height(); 
$element.css('height',h-20);
```
2. 使用匈牙利命名法 (在变量前加$前缀，便于识别出jQuery对象。)
```javascript
// 糟糕 
var first = $('#first'); 
var second = $('#second'); 
var value = $first.val(); 
 
// 建议 - 在jQuery对象前加$前缀 
var $first = $('#first'); 
var $second = $('#second');
var value = $first.val();
                                 
```

3. 使用 Var 链（单 Var 模式）
将多条var语句合并为一条语句，建议将未赋值的变量放到后面。
```javascript
var 
  $first = $('#first'), 
  $second = $('#second'), 
  value = $first.val(), 
  k = 3, 
  cookiestring = 'SOMECOOKIESPLEASE', 
  i, 
  j, 
  myArray = {};
```
4. 使用on
```javascript
// 糟糕 
$first.click(function(){ 
    $first.css('border','1px solid red'); 
    $first.css('color','blue'); 
}); 
 
$first.hover(function(){ 
    $first.css('border','1px solid red'); 
}) 
 
// 建议 
$first.on('click',function(){ 
    $first.css('border','1px solid red'); 
    $first.css('color','blue'); 
}) 
 
$first.on('hover',function(){ 
    $first.css('border','1px solid red'); 
})
   
```
5. 精简过程
```javascript
// 糟糕 
$first.click(function(){ 
    $first.css('border','1px solid red'); 
    $first.css('color','blue'); 
}); 
 
// 建议 
$first.on('click',function(){ 
    $first.css({ 
        'border':'1px solid red', 
        'color':'blue' 
    }); 
});
```

6. 采用链式操作
```javascript
// 糟糕 
$second.html(value); 
$second.on('click',function(){ 
    alert('hello everybody'); 
}); 
$second.fadeIn('slow'); 
$second.animate({height:'120px'},500); 
 
// 建议 
$second.html(value); 
$second.on('click',function(){ 
    alert('hello everybody'); 
}).fadeIn('slow').animate({height:'120px'},500);
```
7. 维持代码的可读性
伴随着精简代码和使用链式的同时，可能带来代码的难以阅读。添加缩紧和换行能起到很好的效果。
```javascript

// 糟糕 
$second.html(value); 
$second.on('click',function(){ 
    alert('hello everybody'); 
}).fadeIn('slow').animate({height:'120px'},500); 
 
// 建议 
$second.html(value); 
$second 
    .on('click',function(){ alert('hello everybody');}) 
    .fadeIn('slow') 
    .animate({height:'120px'},500);
```
8. 选择短路求值
```javascript

// 糟糕 
function initVar($myVar) { 
    if(!$myVar) { 
        $myVar = $('#selector'); 
    } 
} 
 
// 建议 
function initVar($myVar) { 
    $myVar = $myVar || $('#selector'); 
}
       
```
9. 选择捷径
```javascript
// 糟糕 
if(collection.length > 0){..} 
 
// 建议 
if(collection.length){..}
```
10. 繁重的操作中分离元素 
如果你打算对DOM元素做大量操作（连续设置多个属性或css样式），建议首先分离元素然后在添加。
```javascript

// 糟糕 
var 
    $container = $("#container"), 
    $containerLi = $("#container li"), 
    $element = null; 
$element = $containerLi.first(); 
//... 许多复杂的操作 
 
// better 
var 
    $container = $("#container"), 
    $containerLi = $container.find("li"), 
    $element = null; 
$element = $containerLi.first().detach(); 
//... 许多复杂的操作 
$container.append($element);
```
11. 使用子查询缓存的父元素 
正如前面所提到的，DOM遍历是一项昂贵的操作。典型做法是缓存父元素并在选择子元素时重用这些缓存元素。
```javascript
// 糟糕 
var 
    $container = $('#container'), 
    $containerLi = $('#container li'), 
    $containerLiSpan = $('#container li span'); 
 
// 建议 (高效) 
var 
    $container = $('#container '), 
    $containerLi = $container.find('li'), 
    $containerLiSpan= $containerLi.find('span');
```
12. 避免通用选择符 
将通用选择符放到后代选择符中，性能非常糟糕。
```javascript
// 糟糕 
$('.container > *'); 
 
// 建议 
$('.container').children();
```
13. 避免隐式通用选择符 
通用选择符有时是隐式的，不容易发现。

```javascript
// 糟糕 
$('.someclass :radio'); 
 
// 建议 
$('.someclass input:radio');
```

14. 优化选择符 
例如，Id选择符应该是唯一的，所以没有必要添加额外的选择符。

```javascript

// 糟糕 
$('div#myid'); 
$('div#footer a.myLink'); 
 
// 建议 
$('#myid'); 
$('#footer .myLink');
```
15. 避免多个ID选择符
ID 选择符应该是唯一的，不需要添加额外的选择符，更不需要多个后代ID选择符。
```javascript
// 糟糕 
$('#outer #inner'); 
 
// 建议 
$('#inner');
                  
```