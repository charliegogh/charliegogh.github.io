(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{269:function(t,e,n){"use strict";n.r(e);var s=n(0),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("blockquote",[n("p",[t._v("登陆页面底部文字被弹起解决方案")])]),t._v(" "),n("ol",[n("li",[t._v("获取默认屏幕高度和实时屏幕高度")])]),t._v(" "),n("ul",[n("li",[t._v("默认屏幕高度：docmHeight:document.documentElement.clientHeight")]),t._v(" "),n("li",[t._v("实时屏幕高度：showHeight:document.documentElement.clientHeight")])]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[t._v("实时设置屏幕高度")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("window.onresize = () => {\n      return (() => {\n        this.showHeight = document.body.clientHeight;\n      })()\n    }\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[t._v("监听屏幕高度变化，对底部文字实时动态显示和隐藏")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("watch: {\n    showHeight() {\n      if (this.docmHeight > this.showHeight) {\n        this.hidshow = false\n      } else {\n        this.hidshow = true\n      }\n    }\n  }\n")])])])])}),[],!1,null,null,null);e.default=i.exports}}]);