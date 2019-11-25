(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{262:function(t,n,e){"use strict";e.r(n);var a=e(0),v=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"什么是http"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是http"}},[t._v("#")]),t._v(" 什么是http")]),t._v(" "),e("p",[t._v("http 即超文本传输协议，是一种用于分布式、协作式、和超媒体信息系统的应用层协议，是万维网的数据通信的基础；设计其最初目的是为了提供一种发布和接收HTML页面的方法。通过HTTP或者HTTPS协议请求的资源由统一资源标识符（Uniform Resource Identifiers，URI）来标识。")]),t._v(" "),e("h1",{attrs:{id:"理解http协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#理解http协议"}},[t._v("#")]),t._v(" 理解http协议")]),t._v(" "),e("p",[t._v('http 协议是TCP/IP协议栈/族中"应用层"的一个协议，用于在S(服务器)和C(B)(客户端)之间传递超文本内容,(如HTML、js、css、音视频等),其默认端口是80')]),t._v(" "),e("h1",{attrs:{id:"一个完整的-web-访问过程（http-协议访问过程）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一个完整的-web-访问过程（http-协议访问过程）"}},[t._v("#")]),t._v(" 一个完整的 web 访问过程（http 协议访问过程）")]),t._v(" "),e("p",[t._v("1、客户端用户在浏览器中输入某个url，形如http://www.baidu.com\n2、客户端操作系统做地址解析，dns解析。获得目标服务器的ip地址\n3、客户端操作系统打开一个自由端口，向服务器发起连接请求\n4、经过三次握手，服务器端确认与客户端的链接，打开一个自由端口与该客户端通信\n5、客户端开始发送请求数据----以4kb大小的一个又一个的请求数据包，这个过程称为HTTP Repuest包\n这里为什么只有4k？ 因为底层传输限制\n6、服务器开始接收请求数据包，接收完成后，开始处理接收到的数据\n这个过程叫做：Repuest handling 事件请求的一个处理\n7、处理完成之后，服务器完成请求之后开始向客户端发送响应数据，发送以4kb为大小的响应数据\n发送HTTP Response\n8、响应结束之后，服务器和客户端会经过4次握手，断开链接，关闭各自的自由端口")]),t._v(" "),e("h1",{attrs:{id:"url-详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#url-详解"}},[t._v("#")]),t._v(" URL 详解")]),t._v(" "),e("h2",{attrs:{id:"完整格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#完整格式"}},[t._v("#")]),t._v(" 完整格式")]),t._v(" "),e("p",[t._v("scheme://host[:port#]/path/.../[?query-string][#anchor]\n##各参数详解:\nscheme:方案名/模式名，指定以哪种协议从服务器获取指定资源；方案名不区分大小写，常见方案：HTTP HTTPS FTP MAILTO RTSP FILE NEWS等")]),t._v(" "),e("p",[t._v("HOST:主机名，资源所在服务器的IP地址或者域名（需要DNS转换成IPD地址）")]),t._v(" "),e("p",[t._v("PORT：端口号，没项服务在服务器上都对应一个监听端口号\n严格来讲，计算机中对外提供的服务程序可以绑定到任一端口上，从而实现监听客户端连接请求的任务\n常见协议指定一些默认端口号，应努力避免混用")]),t._v(" "),e("p",[t._v("USER:用户名，某些方案访问资源时需要指定用户名 默认值为anonymouse\npwd：密码，默认为地址")]),t._v(" "),e("p",[t._v("PATH：路径，服务器上资源的本地名称，由一个/将其分开\n例如：ftp://admin:123@ip地址/admin/secret.xls 这其中的admin是虚拟路径，虚拟路径映射为物理路径，这个过程称为资源映射")]),t._v(" "),e("p",[t._v('PARAMS:参数，某些方案会使用参数来指定输入参数，每个参数都采用"名/值对"形式，一个URL中可以有多个这样的"名/值对"，使用分号（；）相隔')]),t._v(" "),e("p",[t._v("QUERY:查询字符串,某些方案会使用查询字符串传递参数以激活应用程序,使用?与其他组件分割\nhttp://www.baidu.com/s?wd=js&issp=1&f=8 不能有中文不能有空格")]),t._v(" "),e("p",[t._v("FRAG:片段，也称为ANCHO（锚点）、TAG（标签）指一个资源中某一个部分的名字。引用对象时，不用frag字段传送给服务器，该字段是在客户端内部\n使用，通过#与其它部分分割\nhttp://www.xiaoshuo.com/XiYouJi.html#chapeter8")]),t._v(" "),e("h2",{attrs:{id:"url与-uli-urn-关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#url与-uli-urn-关系"}},[t._v("#")]),t._v(" url与 ULI URN 关系")]),t._v(" "),e("p",[t._v("URI:统一资源标志符 包含URL和URN,意思就是确定 URL 的位置,通俗点说就指定网站 ip\nURL：统一资源定位符 http://www.baidu.com\nURN:统一资源命名符 mailto:admin@tarena.com")]),t._v(" "),e("h1",{attrs:{id:"http协议详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http协议详解"}},[t._v("#")]),t._v(" HTTP协议详解")]),t._v(" "),e("p",[t._v("HTTP通信\n请求与响应原理：\nMessage:消息/报文,是在HTTP客户端与服务器之间传递的数据块 将是将4k 的数据块进行拆分")]),t._v(" "),e("p",[t._v("HTTP协议规定，消息必须符合特定的格式才能彼此理解")]),t._v(" "),e("p",[t._v("Request Message：客户端向服务器发送的请求消息\nReponse Message：服务器根据客户端的请求消息,返回给客户端的相应消息")]),t._v(" "),e("p",[t._v("消息/报文的组成?\nStart Line：消息起始行,必须,消息的基本描述信息\n（1）起始行 CRLF\n（2）消息头部/报头 1CRLF\n消息头部/报头 2CRLF\n消息头部/报头 3CRLF\nCRLF\n（3）消息正文/主体CRLF\nHeader：消息头部/报头，可能有0~n个，消息详细属性\nBody：消息主体，可选，包含数据主体")]),t._v(" "),e("p",[t._v("起始行和消息头是纯ASCLL字符,每行以CRLF结束\n消息主体是一个可选的数据块，其中的数据可以为空，或者为字符数据（如html、css、js等）或者二进制数据（图片等）")]),t._v(" "),e("p",[t._v("#HTTP消息结构概述\n包括请求消息的三部分\n（1）起始行/请求行\n请求方法 空格 请求URI 空格 所用协议 CRLF\n（2）消息头部/请求头部\n（3）消息主体/请求正文")]),t._v(" "),e("p",[t._v("#请求方法:指定了客户端想对指定的资源/服务器做任何操作:可用的请求方法")]),t._v(" "),e("ol",[e("li",[t._v("GET 指明客户端想从客户端获取指定的资源")]),t._v(" "),e("li",[t._v("POST指明客户端想发送给服务器的一些数据")]),t._v(" "),e("li",[t._v("PUT 指明客户端想让服务器保存某个资源")]),t._v(" "),e("li",[t._v("DELETE 指明客户端想让服务器删除某个资源")]),t._v(" "),e("li",[t._v("HEAD 指明客户端只想查看指定资源的相应头部信息,而不是资源本身")]),t._v(" "),e("li",[t._v("TRACE 客户端可以对请求消息的传输路径进行追踪")]),t._v(" "),e("li",[t._v("OPTIONS 客户端询问服务器可以提交哪些请求方法\nHEAD 只要资源本身,减少资源请求\nPUT DELETE 有些服务器直接被禁用的")])]),t._v(" "),e("p",[t._v("响应消息的三部分\n(1)起始行/相应行\n(2)消息头部/响应头部\n(3)消息主体/响应正文")]),t._v(" "),e("p",[t._v("#常见面试题")]),t._v(" "),e("p",[t._v("1.常见的服务器端口号\nftp 21\n2.HTTO1.0和1.1重要区别\nHTTP 1.0 Offline 离线模式，表示断开链接。\nHTTP 1.1 Connection:Keep-Alive 保持连接一段时间\nHTTP 0.9 只支持Get方法，不支持MIME(Multipurpose Internet Mail Extension多用途的互联网邮件扩展),用于在电子邮件中指定附件文件类型的扩展表达方式\nHTTP/1.0+ 支持持久链接、虚拟主机、代理连接等新特性，成为非官方的标准\n虚拟主机就是一台服务器能跑很多的网站。")]),t._v(" "),e("p",[t._v("3.列举HTTP协议1.1相较于HTTP/1.0的改进\n支持持久连接、虚拟主机、代理连接")]),t._v(" "),e("p",[t._v("4.常见的 MIME 类型\n此处表格嵌套\nMIME类型 后缀名是不可靠的\nimage/jpeg .jpg\nimage/jpeg .jpeg\ntext/html .htm\ntext/html .html\ntext/html .xhtml")]),t._v(" "),e("p",[t._v("[谨记的数据格式]\njson数据格式：application/json\nxml数据格式: application/xml\npng:image/png\ndoc:application/msword")]),t._v(" "),e("p",[t._v("URL语法：\nURL完整格式：\n😕/😡😕:#\njs中的encodeURI()函数不会对 😕@;?#进行编码\nencodeURIComponent()函数会进行编码")])])}),[],!1,null,null,null);n.default=v.exports}}]);