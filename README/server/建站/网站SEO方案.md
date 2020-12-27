# 网站seo方案
## URL标准化
1. 任何页面有且只有一个 url 地址；
2. 禁止改版时URL 链接替换；
3. url 地址全部小写，以'/'结尾；
4. 不能出现大写和小写、主域顶级域都能访问的情况，如果都能访问将大写的URL和顶级域URL使用301跳转到小写的 URL。

## 权重优化

a 标签的属性值，告诉搜索引擎不要追踪设置了nofollow属性的链接url。   举个例子：
```
<a href="http://www.abs.com/abc.html"rel="nofollow">signin</a>
//这里就告诉搜索引擎不要追踪http://www.abs.com/abc.html这个链接。
```

## 内部链接优化
a 标签链接使用绝对路径

## alt 信息优化
网页的 img 标签添加 alt; 
优化规则：图片 Alt 属性优化规则:{图片主题};
图片调用：使用绝对、静态链接地址。

## 错误页面优化
404错误页面跳转设置

## 首页权重标签
网站首页：h1标签一个、h2标签2~5个、h3 2~5个



```javascript
## 在网站首页<head>标签中添加以下代码。

```html
<link href="http://www.xxx.cn/" rel="canonical" />
```

## 公共页面 head 文件中 LOGO等链接改为绝对地址:
```html
 <a class="nav-item" href="/page/index">首页</a>
 更改为
<a class="nav-item" href="/ ">首页</a>
```

## 使用 robots 协议屏蔽无效的页面地址。见下:robots.txt 文件。 
```
#
# robots.txt for www.xxx.cn
#
User-agent: *
Disallow:/page/ 
Disallow:/? *

User-agent: *  允许所有搜索引擎
disallow： /*？表示禁止抓取？结尾的链接吧。
```
```
