(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{229:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"高德地图使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高德地图使用"}},[t._v("#")]),t._v(" 高德地图使用")]),t._v(" "),s("ol",[s("li",[t._v("引入jsdk(key,UI库)")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<script type="text/javascript" src="http://webapi.amap.com/maps?v=1.3&key=您申请的key值"><\/script> \n<script src="https://webapi.amap.com/ui/1.0/main.js?v=1.0.11"><\/script>\n')])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("增加webpack配置       直接引入cdn")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" configureWebpack: {\n    externals: {\n      'AMap': 'AMap' // 高德地图配置\n       'AMapUI': 'AMapUI'// ui组件库\n    }\n  }\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("组件中引入")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import AMap from 'AMap' // 引入高德地图\n")])])]),s("ol",{attrs:{start:"4"}},[s("li")])])}),[],!1,null,null,null);a.default=r.exports}}]);