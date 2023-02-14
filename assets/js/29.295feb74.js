(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{384:function(t,r,e){"use strict";e.r(r);var a=e(45),s=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vue-router"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-router"}},[t._v("#")]),t._v(" vue-router")]),t._v(" "),e("h2",{attrs:{id:"路由传参"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路由传参"}},[t._v("#")]),t._v(" 路由传参")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    let param = this.$route.query;\n    如果使用query方式傳入的參數使用this.$route.query接收\n    如果使用params方式传入的参数使用this.$route.params接收\n")])])]),e("h3",{attrs:{id:"query方式传参使用方式-避免参数丢失问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query方式传参使用方式-避免参数丢失问题"}},[t._v("#")]),t._v(" query方式传参使用方式(避免参数丢失问题)")]),t._v(" "),e("ul",[e("li",[t._v("配置动态路由")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const router = new VueRouter({\n  routes: [\n    // 动态路径参数 以冒号开头\n    { path: '/user/:id', component: User }\n  ]\n})\n")])])]),e("ul",[e("li",[t._v("使用 props 将组件和路由解耦")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const router = new VueRouter({\n  routes: [\n    // 动态路径参数 以冒号开头\n    { path: '/user/:id', component: User, props:true }\n  ]\n})\n\nnew Vue ({\n     el:'#app',\n     props: [\"id\"]\n})\n")])])]),e("h2",{attrs:{id:"路由跳转"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路由跳转"}},[t._v("#")]),t._v(" 路由跳转")]),t._v(" "),e("ol",[e("li",[t._v("vue-router push replace go 无法从二级路由跳转到一级路由,使用router-link")]),t._v(" "),e("li",[t._v("跳转到上一页 this.$router.go(-1)")])]),t._v(" "),e("h2",{attrs:{id:"router-link-参数配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#router-link-参数配置"}},[t._v("#")]),t._v(" router-link 参数配置")]),t._v(" "),e("ul",[e("li",[t._v("to")]),t._v(" "),e("li",[t._v("replace(不会留下历史记录)")]),t._v(" "),e("li",[t._v("append(在当前路径钱添加基路径)")]),t._v(" "),e("li",[t._v("tag (渲染成某种标签)")]),t._v(" "),e("li",[t._v("active-class 链接激活css类名")]),t._v(" "),e("li",[t._v("exact 是否激活链接")]),t._v(" "),e("li",[t._v("event 声明可以用来触发导航的事件。可以是一个字符串或是一个包含字符串的数组。")]),t._v(" "),e("li",[t._v("exact-active-class 配置当链接被精确匹配的时候应该激活的 class")])]),t._v(" "),e("h2",{attrs:{id:"router-view"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#router-view"}},[t._v("#")]),t._v(" router-view")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("- name <router-view>设置了名称，则会渲染对应的路由配置中 components 下的相应组件\n\n- mode 配置路由模式 \nhash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器。\n\nhistory: 依赖 HTML5 History API 和服务器配置。查看 HTML5 History 模式。\n\nabstract: 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式。\n \n- base  应用的基路径\n \n- linkActiveClass 全局配置 <router-link> 的默认“激活 class 类名\n\n- linkExactActiveClass 全局配置 <router-link> 精确激活的默认的 class\n\n")])])]),e("h2",{attrs:{id:"scrollbehavior"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scrollbehavior"}},[t._v("#")]),t._v(" scrollBehavior")]),t._v(" "),e("p",[t._v("滚动行为可做滚动监听")]),t._v(" "),e("h2",{attrs:{id:"router实例方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#router实例方法"}},[t._v("#")]),t._v(" Router实例方法")]),t._v(" "),e("ul",[e("li",[t._v("router.beforeEach")]),t._v(" "),e("li",[t._v("router.beforeResolve")]),t._v(" "),e("li",[t._v("router.afterEach")])]),t._v(" "),e("h2",{attrs:{id:"路由对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路由对象"}},[t._v("#")]),t._v(" 路由对象")]),t._v(" "),e("p",[t._v("路由对象包含当前激活的路由的状态信息,包含了当前URL解析得到的信息,还包括URL匹配的路由记录")]),t._v(" "),e("h3",{attrs:{id:"路由对象属性-route"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路由对象属性-route"}},[t._v("#")]),t._v(" 路由对象属性  {$route:}")]),t._v(" "),e("ul",[e("li",[t._v("$route.path 字符串，对应当前路由的路径")]),t._v(" "),e("li",[t._v("$route.params 包含了动态片段和全匹配片段")]),t._v(" "),e("li",[t._v("$route.query 表示 URL 查询参数")]),t._v(" "),e("li",[t._v("$route.fullPath 解析后的 URL，包含查询参数和 hash 的完整路径")]),t._v(" "),e("li",[t._v("$route.matched 含当前路由的所有嵌套路径片段的路由记录。路由记录就是 routes 配置数组中的对象副本 (还有在 children 数组)。")]),t._v(" "),e("li",[t._v("$route.name 当前路由名称")]),t._v(" "),e("li",[t._v("$route.redirectedFrom 如果存在重定向，即为重定向来源的路由的名字")])]),t._v(" "),e("h2",{attrs:{id:"组件注入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件注入"}},[t._v("#")]),t._v(" 组件注入")]),t._v(" "),e("ul",[e("li",[t._v("this.$router  $router实例")]),t._v(" "),e("li",[t._v("this.$route 当前激活的路由信息对象(只读) 可用watch进行监听")])])])}),[],!1,null,null,null);r.default=s.exports}}]);