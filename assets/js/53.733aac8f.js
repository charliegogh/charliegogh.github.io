(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{253:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"h5兼容问题汇总"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#h5兼容问题汇总"}},[t._v("#")]),t._v(" H5兼容问题汇总")]),t._v(" "),a("h2",{attrs:{id:"ios日期问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios日期问题"}},[t._v("#")]),t._v(" ios日期问题")]),t._v(" "),a("p",[t._v("对于yyyy-mm-dd hh:mm:ss 这种格式在ios系统不识别")]),t._v(" "),a("ul",[a("li",[t._v("解决方案(转成 yyyy/mm/dd hh:mm:ss )")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\-/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"键盘收起，页面卡住，不回落"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#键盘收起，页面卡住，不回落"}},[t._v("#")]),t._v(" 键盘收起，页面卡住，不回落")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v('@blur.prevent="resetScroll()"\n')])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resetScroll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scroll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"移动端响应式图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端响应式图片"}},[t._v("#")]),t._v(" 移动端响应式图片")]),t._v(" "),a("p",[t._v("在移动端中，图片的处理应该是很谨慎的，假设有一张图片本身的尺寸是X宽，设置和包裹它的div一样宽，如果是div宽度小于图片宽度没有问题，但是如果div宽度大于图片的宽度，图片被拉伸失真")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("解决方法：让图片最大只能是自己的宽度\nimg{ max-width: 100%; display: block; margin: 0 auto; }\n")])])]),a("h2",{attrs:{id:"ios滚动条卡顿的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios滚动条卡顿的问题"}},[t._v("#")]),t._v(" ios滚动条卡顿的问题")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-overflow-scrolling")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" touch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"vue-hash模式下微信分享-后之后被截取解决办法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-hash模式下微信分享-后之后被截取解决办法"}},[t._v("#")]),t._v(" vue hash模式下微信分享#后之后被截取解决办法")]),t._v(" "),a("p",[t._v("配置中间页,需将中转页放到跟公众号服务器文件夹同级目录 使用最原始的html实现,vue调用分享jsdk直接跳转到html再从html跳转到vue路由")]),t._v(" "),a("h2",{attrs:{id:"vueh5ios10白屏问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vueh5ios10白屏问题"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"http://www.manongjc.com/article/24589.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("vueH5ios10白屏问题"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("原因:低版本的iphone不识别es6语法")]),t._v(" "),a("h2",{attrs:{id:"fastclick-ios点击不灵敏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fastclick-ios点击不灵敏"}},[t._v("#")]),t._v(" fastClick ios点击不灵敏")]),t._v(" "),a("blockquote",[a("p",[t._v("修改源码部分\n"),a("a",{attrs:{href:"https://blog.csdn.net/q95548854/article/details/90267182",target:"_blank",rel:"noopener noreferrer"}},[t._v("ios上input点击不灵敏"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"启动或禁用自动识别页面中的电话号码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动或禁用自动识别页面中的电话号码"}},[t._v("#")]),t._v(" 启动或禁用自动识别页面中的电话号码;")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("format-detection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("telephone=no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n")])])]),a("p",[t._v("默认情况下设备会自动识别任何可能是电话号码的字符串,设置telephone=no可以禁用这项功能,设置不识别邮箱和地址也同理")]),t._v(" "),a("h2",{attrs:{id:"h5网站input设置为type-number的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#h5网站input设置为type-number的问题"}},[t._v("#")]),t._v(" h5网站input设置为type=number的问题")]),t._v(" "),a("h2",{attrs:{id:"ios防止长按页面元素被选中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios防止长按页面元素被选中"}},[t._v("#")]),t._v(" ios防止长按页面元素被选中")]),t._v(" "),a("p",[t._v("解决:加入样式可禁止用户进行复制,ios和一般的安卓都可以解决")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-touch-callout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  //系统默认菜单被禁用"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("可以实现页面因为长按弹出各种操作窗口\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-user-select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //webkit浏览器  \n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-khtml-user-select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //早期浏览器 \n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-moz-user-select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //火狐 \n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-ms-user-select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //IE10 \n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("user-select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),a("p",[t._v("添加完这段代码后在IOS上会有问题,这时发现input框无法正在输入内容了;造成这个原因是-webkit-user-select:none;这个属性,解决方法就是在css文件中同时设置一下input的属性,如下:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("input "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("      \n     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("webkit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("select"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//webkit浏览器    ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"transition清除闪屏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transition清除闪屏"}},[t._v("#")]),t._v(" transition清除闪屏")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-transform-style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" preserve-3d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //设置内嵌的元素在 3D 空间如何呈现：保留3D\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-backface-visibility")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //设置进行转换的元素的背面在面对用户时是否可见：隐藏\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-perspective")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"解决active伪类失效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决active伪类失效"}},[t._v("#")]),t._v(" 解决active伪类失效")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ontouchstart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"flex对低版本的ios和android的支持问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex对低版本的ios和android的支持问题"}},[t._v("#")]),t._v(" flex对低版本的ios和Android的支持问题")]),t._v(" "),a("p",[t._v("使用postcss的autoprefixer插件，自动添加浏览器内核前缀，\n并且增加更低浏览器版本的配置，自动添加flex老版本的属性和写法\nautoprefixer({\nbrowsers: [\n'iOS >= 6',     // 特殊处理支持低版本IOS\n'Safari >= 6',  // 特殊处理支持低版本Safari\n],\n}),")]),t._v(" "),a("h2",{attrs:{id:"开启硬件加速"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启硬件加速"}},[t._v("#")]),t._v(" 开启硬件加速")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate3d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-moz-transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate3d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-ms-transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate3d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate3d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"audio元素和video元素在ios和andriod中无法自动播放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#audio元素和video元素在ios和andriod中无法自动播放"}},[t._v("#")]),t._v(" audio元素和video元素在ios和andriod中无法自动播放")]),t._v(" "),a("p",[t._v("代码如下,触屏及播放")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("one")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'touchstart'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\naudio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"禁止文本缩放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#禁止文本缩放"}},[t._v("#")]),t._v(" 禁止文本缩放")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-text-size-adjust")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"如何禁止保存或拷贝图像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何禁止保存或拷贝图像"}},[t._v("#")]),t._v(" 如何禁止保存或拷贝图像")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("img")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-touch-callout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"设置input里面placeholder字体的大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置input里面placeholder字体的大小"}},[t._v("#")]),t._v(" 设置input里面placeholder字体的大小")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("::-webkit-input-placeholder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10pt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"清除输入框内阴影"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清除输入框内阴影"}},[t._v("#")]),t._v(" 清除输入框内阴影")]),t._v(" "),a("p",[t._v("Q: 在iOS上，输入框默认有内部阴影，但无法使用 box-shadow 来清除，如果不需要阴影，可以这样关闭：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-appearance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);