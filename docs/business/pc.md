# pc

## ie兼容问题汇总

### IE8 下实现兼容 rgba

[链接](https://segmentfault.com/a/1190000002485299)

### border-radius、box-shadow 兼容 IE8

[链接](https://blog.csdn.net/jiang_fulai/article/details/80005476)

### 兼容 ie8 水平垂直居中

[链接](https://blog.csdn.net/cyyax/article/details/51272039)

```css
div {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
}
```

### ie8 下 nth-child() 不兼容的问题

> 兼容性写法：
    
    ```
    ul li:first-child{
        color:#fff;
    }/*选取第一个li*/
    ul li:first-child+li+li{
        color:#fff;
    }/*选取第三个li*/
    ```

### 多行文本超出兼容 ie8

> 兼容性写法：

```
      $(function(){
                $(".box").ellipsis({
                    row:4
                })
            })
```

插件地址：https://github.com/STAR-ZERO/jquery-ellipsis/blob/master/src/jquery.ellipsis.js

### css 图片和文字垂直居中（不兼容 ie8）

```
img{
    vertical-align: middle
}
```

### IE6-IE8 支持 HTML5 标签

```html
<!--[if lt IE 9]>
　　<script src="//cdn.bootcss.com/respond.js/1.4.2/respond.js"></script>
 　 <script src="http://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<![endif]—>
//html5shiv：解决ie9以下浏览器对html5新增标签的不识别，并导致CSS不起作用的问题。
//respond.min:让不支持css3 Media Query的浏览器包括IE6-IE8等其他浏览器支持查询。
```

### 条件注释

IE7:

    <!--[if IE 7]>
    	<p>只能在IE7下见到我</p>
    <![endif]-->
IE8：

    <!-[if IE 8]>
        <p>只能在IE8下见到我</p>
    <![endif]-->
其他如(针对 IE9 及 IE9 以下的版本)：

<!--[if lt IE 7]><html class="ie6"><![endif]-->
<!--[if IE 7]><html class="ie7"><![endif]-->
<!--[if IE 8]><html class="ie8"><![endif]-->
<!--[if IE 9]><html class="ie9"><![endif]-->

举个例子：

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <style>
            .nb{width: 20px;height: 20px;background-color: blue;}
        </style>
        <!--[if IE 7]>
            <p>只有在IE7中可以看到</p>
        <![endif]-->
    </head>
    <body>
        <div class="nb"></div>
    </body>
    </html>

### 浏览器怪癖

第三种我们非常常用的兼容处理方式就是研究浏览器怪癖：

- IE7:

  .container{
  height: 100px;
  /_只有 IE6 和 IE7 会忽略_/
  \*height: 200px;
  }

- IE8：

      	/*IE6-8不支持:root选择器*/
          :root .selector{
          	/*IE6-8 Style*/
      	}

  注：`：root`匹配文档的根元素。  
   以及：

          .selector{
      	    color: #fff;
      	    /*IE6-8会忽略“\9”*/
      	    color: #fff\9;
          }

---

比如:
.tip{
background: blue;
background: red\9;
\*background: black;
\_background: yellow;
}

### CSS3 的支持情况

> **CSS3 属性：**  
> IE7 不支持  
> IE8 部分支持  
> IE 基本支持

- IE8 支持

      		box-sizing
      		outline

- IE8 不支持

      		background-size（容器本身尺寸不固定的时候使用）：推荐在IE8及以下使用固定宽度布局
      		border-radius
      		box-shadow
      		opacity：filter：alpha(opacity=50)
      		rgba、hsl、hsla: 一般场景下，使用相近的不透明颜色替代；alpha可以通过增加额外元素，并设置透明度实现
      		rem/vh/vw/calc: 降级为固定宽度

- IE9 不支持

      		transition与animation：可以接受的降级，实在不行用JavaScript

- media query

      		基本的媒体（all/print/screen/speech）都支持
      		媒体特性（width/height/orientation..）IE9及以上：还是建议IE8及以下使用固定宽度布局

### 语义化的 HTML5 标签

    <style>
    	article, main, nav, aside, section,
    	header,footer, figure, figcaption{
    		display: block;
    	}
    </style>

用 JS 插件来解决

    <!--[if lte IE 8]>
    	<script src="html5shiv.js"></script>
    <![endif]-->
