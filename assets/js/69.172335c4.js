(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{269:function(t,a,s){"use strict";s.r(a);var r=s(0),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"开发常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发常见问题"}},[t._v("#")]),t._v(" 开发常见问题")]),t._v(" "),s("ol",[s("li",[t._v("vue打包图片不显示的问题\nbuild文件夹下webpack.base.config.js,修改图片阈值,或者可以直接将limit去掉.")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  options: {\n     limit: 20000，//限制图片的大小（字节）\n  }\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("vue微信授权登录必须要用这种方式去进授权页,不然会出现跨域的问题")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("window.location.href = `${location.origin}/webservice/clyjUser/wxLogin`\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("history.go()和history.back()的用法与区别？")])]),t._v(" "),s("p",[t._v("简单的说就是：go(-1):返回上一页，原页面表单中的内容会丢失；back():返回上一页，原页表表单中的内容会保留。history.go(-1):后退+刷新history.back():后退\n之所以注意到这个区别，是因为不同的浏览器后退行为也是有区别的，而区别就跟javascript：history.go()和history.back()的区别类似。\nChrome和ff浏览器后退页面，会刷新后退的页面，若有数据请求也会提交数据申请。类似于history.go(-1);\n而safari（包括桌面版和ipad版）的后退按钮则不会刷新页面，也不会提交数据申请。类似于javascript：history.back();")])])}),[],!1,null,null,null);a.default=e.exports}}]);