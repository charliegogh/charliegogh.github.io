(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{288:function(t,e,n){"use strict";n.r(e);var a=n(0),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"网页性能优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#网页性能优化"}},[t._v("#")]),t._v(" 网页性能优化")]),t._v(" "),n("ol",[n("li",[t._v("使用图片懒加载")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("\t<img src=\"/weixin/images/bannermoren.png\" data-src='/{$ban.picture}' onerror=\"this.src='__STATIC__/weixin/images/bannermoren.png'\" />\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    var loadimages =  lazyload();\n    loadimages();\n    window.addEventListener('scroll',loadimages,false);\n\tfunction lazyload(){\n\t\tvar images = document.getElementsByTagName('img');\n\t\tvar len = images.length;\n\t\tvar n = 0;\n\t\treturn function(){\n\t\t\tvar seeHeight = document.documentElement.clientHeight;\n\t\t\tvar scrollTop = document.documentElement.scrollTop || document.body.scrollTop;\n\t\t\tfor(var i = 0;i<len;i++){\n\t\t\t\tif(images[i].offsetTop<seeHeight+scrollTop){\n\t\t\t\t\tif(images[i].getAttribute('data-src')){\n\t\t\t\t\t\timages[i].src = images[i].getAttribute('data-src')\n\t\t\t\t\t}\n//\t\t\t\t\t\telse{\n//\t\t\t\t\t\t\timages[i].src =\n//\t\t\t\t\t\t}\n\t\t\t\t\tn+=1\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);