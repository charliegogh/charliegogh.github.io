(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{221:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue面试题汇总"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue面试题汇总"}},[t._v("#")]),t._v(" vue面试题汇总")]),t._v(" "),s("h2",{attrs:{id:"class-与-style-如何动态绑定？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#class-与-style-如何动态绑定？"}},[t._v("#")]),t._v(" Class 与 Style 如何动态绑定？")]),t._v(" "),s("h2",{attrs:{id:"class和style的几种表达方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#class和style的几种表达方式"}},[t._v("#")]),t._v(" class和style的几种表达方式")]),t._v(" "),s("blockquote",[s("p",[t._v("class和style的几种表达方式")])]),t._v(" "),s("p",[t._v(":class 绑定变量 绑定对象 绑定一个数组 绑定三元表达式\n:style 绑定变量 绑定对象 绑定函数返回值 绑定三元表达式")]),t._v(" "),s("h2",{attrs:{id:"mvvm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mvvm"}},[t._v("#")]),t._v(" MVVM")]),t._v(" "),s("ol",[s("li",[t._v("全称： Model-View-ViewModel")])]),t._v(" "),s("h2",{attrs:{id:"nexttick的原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nexttick的原理"}},[t._v("#")]),t._v(" nextTick的原理")]),t._v(" "),s("p",[t._v("[用法]在下次DOM更新循环之后执行延迟回调,在修改数据后立即使用该方法,获取更新后的DOM\n"),s("a",{attrs:{href:"https://github.com/haizlin/fe-interview/issues/363",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细链接"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"style加scoped属性的用途和原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#style加scoped属性的用途和原理"}},[t._v("#")]),t._v(" style加scoped属性的用途和原理")]),t._v(" "),s("p",[t._v("在标签上绑定了自定义属性,防止css全局污染\n在使用ui框架时如果加scope不会被覆盖,在使用预编译的前提下可以在最外层用id包裹")]),t._v(" "),s("h2",{attrs:{id:"template有什么用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#template有什么用"}},[t._v("#")]),t._v(" template有什么用")]),t._v(" "),s("p",[t._v("当做一个不可见的包裹元素，减少不必要的DOM元素，整个结构会更加清晰。")]),t._v(" "),s("h2",{attrs:{id:"v-show-与-v-if-有什么区别？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-show-与-v-if-有什么区别？"}},[t._v("#")]),t._v(" v-show 与 v-if 有什么区别？")]),t._v(" "),s("p",[t._v("v-if 是真正的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建；\n也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。"),s("br"),t._v("\nv-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 的 “display” 属性进行切换。\n所以，v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景；v-show 则适用于需要非常频繁切换条件的场景。")]),t._v(" "),s("h2",{attrs:{id:"vue-observable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-observable"}},[t._v("#")]),t._v(" Vue.observable")]),t._v(" "),s("p",[t._v("类轻量级vuex，用作状态管理。")]),t._v(" "),s("h2",{attrs:{id:"vue中使用this注意点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue中使用this注意点"}},[t._v("#")]),t._v(" vue中使用this注意点")]),t._v(" "),s("h2",{attrs:{id:"vue渲染模板时怎么保留模板中的html注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue渲染模板时怎么保留模板中的html注释"}},[t._v("#")]),t._v(" vue渲染模板时怎么保留模板中的HTML注释")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<template comments>\n  ...\n</template>\n")])])]),s("h2",{attrs:{id:"watch的属性用箭头函数定义结果会怎么样"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#watch的属性用箭头函数定义结果会怎么样"}},[t._v("#")]),t._v(" watch的属性用箭头函数定义结果会怎么样")]),t._v(" "),s("p",[t._v("[vue] watch的属性用箭头函数定义结果会怎么样？\nthis为undefined\n因为箭头函数默绑定父级作用域的上下文，所以不会绑定vue实例，所以 this 是undefind")]),t._v(" "),s("h2",{attrs:{id:"在vue项目中如何配置favicon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在vue项目中如何配置favicon"}},[t._v("#")]),t._v(" 在vue项目中如何配置favicon")]),t._v(" "),s("p",[t._v("html模版加入meta标签，引入favicon")]),t._v(" "),s("h2",{attrs:{id:"如何实现强制刷新组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何实现强制刷新组件"}},[t._v("#")]),t._v(" 如何实现强制刷新组件")]),t._v(" "),s("h2",{attrs:{id:"生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),s("h2",{attrs:{id:"说说你对-spa-单页面的理解，它的优缺点分别是什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说说你对-spa-单页面的理解，它的优缺点分别是什么？"}},[t._v("#")]),t._v(" 说说你对 SPA 单页面的理解，它的优缺点分别是什么？")]),t._v(" "),s("p",[t._v("SPA（ single-page application ）仅在 Web 页面初始化时加载相应的 HTML、JavaScript 和 CSS。一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转；取而代之的是利用路由机制实现 HTML 内容的变换，UI 与用户的交互，避免页面的重新加载。")]),t._v(" "),s("blockquote",[s("p",[t._v("优点：")])]),t._v(" "),s("ul",[s("li",[t._v("用户体验好、快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染；")]),t._v(" "),s("li",[t._v("基于上面一点，SPA 相对对服务器压力小；")]),t._v(" "),s("li",[t._v("前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；")])]),t._v(" "),s("blockquote",[s("p",[t._v("缺点：")])]),t._v(" "),s("ul",[s("li",[t._v("初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载；")]),t._v(" "),s("li",[t._v("前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；")]),t._v(" "),s("li",[t._v("SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。")])]),t._v(" "),s("h3",{attrs:{id:"vue-router"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-router"}},[t._v("#")]),t._v(" vue-router")]),t._v(" "),s("ol",[s("li",[t._v("vue-router怎么重定向页面？\nredirect属性")]),t._v(" "),s("li",[t._v("404页面配置")])]),t._v(" "),s("h2",{attrs:{id:"v-if和v-for的优先级是什么？如果这两个同时出现时，那应该怎么优化才能得到更好的性能？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-if和v-for的优先级是什么？如果这两个同时出现时，那应该怎么优化才能得到更好的性能？"}},[t._v("#")]),t._v(" v-if和v-for的优先级是什么？如果这两个同时出现时，那应该怎么优化才能得到更好的性能？")]),t._v(" "),s("p",[t._v("v-for 的优先级更高\n避免出现这种情况，如果实在需要，则在外嵌套template，在这一层进行v-if判断，然后在内部进行v-for循环，避免每次只有v-if只渲染很少一部分元素，也需要遍历同级的所有元素")]),t._v(" "),s("h2",{attrs:{id:"如何解决vue打包vendor过大的问题？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何解决vue打包vendor过大的问题？"}},[t._v("#")]),t._v(" 如何解决vue打包vendor过大的问题？")]),t._v(" "),s("p",[t._v("1、在webpack.base.conf.js新增externals配置，表示不需要打包的文件，然后在index.html中通过CDN引入")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("externals"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-router"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VueRouter"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuex"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vuex"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"element-ui"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ELEMENT"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BMap"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BMap"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("2、使用路由懒加载")]),t._v(" "),s("h2",{attrs:{id:"vue如何监听键盘事件？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue如何监听键盘事件？"}},[t._v("#")]),t._v(" vue如何监听键盘事件？")]),t._v(" "),s("p",[t._v("@keyup.enter")]),t._v(" "),s("h2",{attrs:{id:"vue-删除数组用delete和vue-delete有什么区别？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-删除数组用delete和vue-delete有什么区别？"}},[t._v("#")]),t._v(" [vue] 删除数组用delete和Vue.delete有什么区别？")]),t._v(" "),s("ul",[s("li",[t._v("delete：只是被删除数组成员变为 empty / undefined，其他元素键值不变")]),t._v(" "),s("li",[t._v("Vue.delete：直接删了数组成员，并改变了数组的键值（对象是响应式的，确保删除能触发更新视图，这个方法主要用于避开 Vue 不能检测到属性被删除的限制）")])]),t._v(" "),s("h2",{attrs:{id:"watch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#watch"}},[t._v("#")]),t._v(" watch")]),t._v(" "),s("h3",{attrs:{id:"怎么在watch监听开始之后立即被调用？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#怎么在watch监听开始之后立即被调用？"}},[t._v("#")]),t._v(" 怎么在watch监听开始之后立即被调用？")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#vm-watch",target:"_blank",rel:"noopener noreferrer"}},[t._v("immediate参数"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"watch如何做深度监听"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#watch如何做深度监听"}},[t._v("#")]),t._v(" watch如何做深度监听")]),t._v(" "),s("p",[t._v("deep:true")]),t._v(" "),s("h3",{attrs:{id:"watch和计算属性有什么区别？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#watch和计算属性有什么区别？"}},[t._v("#")]),t._v(" watch和计算属性有什么区别？")]),t._v(" "),s("ol",[s("li",[t._v("一个是侦听属性，一个是计算属性")]),t._v(" "),s("li",[t._v("一个是为了应对复杂的逻辑计算，一个是对数据的变化作出反应")]),t._v(" "),s("li",[t._v("一个是只有当缓存改变时才执行，一个是只要从新渲染就会执行")]),t._v(" "),s("li",[t._v("一个有缓存，一个没有缓存")])]),t._v(" "),s("h2",{attrs:{id:"怎么使css样式只在当前组件中生效？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#怎么使css样式只在当前组件中生效？"}},[t._v("#")]),t._v(" 怎么使css样式只在当前组件中生效？")]),t._v(" "),s("p",[t._v("scoped")]),t._v(" "),s("h2",{attrs:{id:"webpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[t._v("#")]),t._v(" webpack")]),t._v(" "),s("h3",{attrs:{id:"webpack打包vue速度太慢怎么办"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack打包vue速度太慢怎么办"}},[t._v("#")]),t._v(" webpack打包vue速度太慢怎么办")]),t._v(" "),s("p",[t._v("升级webpack4,支持多进程")]),t._v(" "),s("h2",{attrs:{id:"什么是-mixin？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-mixin？"}},[t._v("#")]),t._v(" 什么是 mixin？")]),t._v(" "),s("p",[t._v("Mixins 使我们能够为 Vue 组件编写可插拔和可重用的功能。如果你希望在多个组件之间重用一组组件选项，例如生命周期 hook、方法等，\n则可以将其编写为 mixin，并在组件中简单地引用它。然后将 mixin 的内容合并到组件中。如果你要在 mixin 中定义生命周期 hook，\n那么它在执行时将优先于组件自己的 hook 。")]),t._v(" "),s("h2",{attrs:{id:"在开发过程中，如果你的-vue-程序和后端-api-服务器未在同一主机上运行，该如何代理-api-请求。假设使用-vue-cli-3-进行设置？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在开发过程中，如果你的-vue-程序和后端-api-服务器未在同一主机上运行，该如何代理-api-请求。假设使用-vue-cli-3-进行设置？"}},[t._v("#")]),t._v(" 在开发过程中，如果你的 Vue 程序和后端 API 服务器未在同一主机上运行，该如何代理 API 请求。假设使用 Vue-CLI 3 进行设置？")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    devServer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        proxy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n                target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ‘http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4040")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api’"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                changeOrigin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" \n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"prop-如何指定其类型要求？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prop-如何指定其类型要求？"}},[t._v("#")]),t._v(" prop 如何指定其类型要求？")]),t._v(" "),s("p",[t._v("通过实现 prop 验证选项，可以为单个 prop 指定类型要求。这对生产没有影响，\n但是会在开发阶段发出警告，从而帮助开发人员识别传入数据和 prop 的特定类型要求的潜在问题。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    accountNumber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        required"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        required"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   favoriteColors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Array\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"什么时候调用-“updated”-生命周期-hook-？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么时候调用-“updated”-生命周期-hook-？"}},[t._v("#")]),t._v(" 什么时候调用 “updated” 生命周期 hook ？")]),t._v(" "),s("p",[t._v("在更新响应性数据并重新渲染虚拟 DOM 之后，将调用更新的 hook。\n它可以用于执行与 DOM 相关的操作，但是（默认情况下）不能保证子组件会被渲染，尽管也可以通过在更新函数中使用 this.$nextTick 来确保。")])])}),[],!1,null,null,null);a.default=r.exports}}]);