(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{209:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue项目优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue项目优化"}},[t._v("#")]),t._v(" vue项目优化")]),t._v(" "),a("h2",{attrs:{id:"使用分包加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用分包加载"}},[t._v("#")]),t._v(" 使用分包加载")]),t._v(" "),a("p",[t._v("使用v-if动态控制组件加载顺序以达到分包加载目的")]),t._v(" "),a("h2",{attrs:{id:"使用keep-alive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用keep-alive"}},[t._v("#")]),t._v(" 使用keep-alive")]),t._v(" "),a("blockquote",[a("p",[t._v("vue提供的一个抽象组件,用于保留组件状态或避免重新渲染,从而节省性能,在keep-alive内被切换时组件的activated、deactivated这两个生命周期钩子函数会被执行")])]),t._v(" "),a("ul",[a("li",[t._v("记录滚动条位置")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取组件根元素Dom")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" page "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 绑定事件,滚动时,储存位置到this.scrollTop")]),t._v("\n      page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scroll"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// activated生命钩子在keep-alive被激活时调用")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("activated")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果曾滚动过,则还原位置")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" page "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("ul",[a("li",[t._v("强制移除缓存\n"),a("a",{attrs:{href:"https://segmentfault.com/a/1190000015845117",target:"_blank",rel:"noopener noreferrer"}},[t._v("强制移除缓存"),a("OutboundLink")],1)])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用Vue.mixin的方法拦截了路由离开事件，并在该拦截方法中实现了销毁页面缓存的功能。")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mixin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("beforeRouteLeave")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rank "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rank "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rank"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rank"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//此处判断是如果返回上一层，你可以根据自己的业务更改此处的判断逻辑，酌情决定是否摧毁本层缓存。")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$vnode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keepAlive"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("componentInstance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("componentInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("componentOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n                                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("componentOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Ctor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("componentOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("componentOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cache "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("componentInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" keys  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("componentInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" keys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                                    keys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("splice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$destroy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"v-for使用注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-for使用注意"}},[t._v("#")]),t._v(" v-for使用注意")]),t._v(" "),a("p",[t._v("（1）v-for 遍历必须为 item 添加 key\n在列表数据进行遍历渲染时，需要为每一项 item 设置唯一 key 值，方便 Vue.js 内部机制精准找到该条列表数据。\n当 state 更新时，新的状态值和旧的状态值对比，较快地定位到 diff 。")]),t._v(" "),a("p",[t._v("（2）v-for 遍历避免同时使用 v-if\nv-for 比 v-if 优先级高，如果每一次都需要遍历整个数组，将会影响速度，尤其是当之需要渲染很小一部分的时候，\n必要情况下应该替换成 computed 属性。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ul"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("li\n    v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user in activeUsers"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user.id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("li"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ul"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\ncomputed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("activeUsers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isActive\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"spa首屏加载优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spa首屏加载优化"}},[t._v("#")]),t._v(" SPA首屏加载优化")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5d4d2e9bf265da0391350326",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack首屏性能优化"),a("OutboundLink")],1)]),t._v(" "),a("ol",[a("li",[t._v("externals")])]),t._v(" "),a("blockquote",[a("p",[t._v("三方库cdn转换")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("开启gzip压缩 (以cli3为例)\nconst isPro = process.env.NODE_ENV === 'production'")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*  configureWebpack: config => {\n  if (isPro) {\n    return {\n      plugins: [\n        new CompressionWebpackPlugin({\n          // 目标文件名称。[path] 被替换为原始文件的路径和 [query] 查询\n          asset: '[path].gz[query]',\n          // 使用 gzip 压缩\n          algorithm: 'gzip',\n          // 处理与此正则相匹配的所有文件\n          test: new RegExp(\n            '\\\\.(js|css)$'\n          ),\n          // 只处理大于此大小的文件\n          threshold: 10240,\n          // 最小压缩比达到 0.8 时才会被压缩\n          minRatio: 0.8\n        })\n      ]\n    }\n  }\n}, */")]),t._v("\n\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("路由懒加载")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import=()=>{}\n")])])]),a("h2",{attrs:{id:"去除多余样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#去除多余样式"}},[t._v("#")]),t._v(" 去除多余样式")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.purgecss.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("修改多余css样式库"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"事件的销毁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件的销毁"}},[t._v("#")]),t._v(" 事件的销毁")]),t._v(" "),a("p",[t._v("Vue 组件销毁时，会自动清理它与其它实例的连接，解绑它的全部指令及事件监听器，但是仅限于组件本身的事件。\n如果在 js 内使用 addEventListene 等方式是不会自动销毁的，需要在组件销毁时手动移除这些事件的监听，以免造成内存泄露，如：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("created")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("click"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeDestroy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("click"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);