(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{236:function(t,n,s){"use strict";s.r(n);var e=s(0),a=Object(e.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"spa首屏加载优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spa首屏加载优化"}},[t._v("#")]),t._v(" SPA首屏加载优化")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.im/post/5d4d2e9bf265da0391350326",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack首屏性能优化"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"现有方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#现有方案"}},[t._v("#")]),t._v(" 现有方案")]),t._v(" "),s("ol",[s("li",[t._v("externals")])]),t._v(" "),s("blockquote",[s("p",[t._v("三方库cdn转换")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("开启gzip压缩 (以cli3为例)\nconst isPro = process.env.NODE_ENV === 'production'")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*  configureWebpack: config => {\n  if (isPro) {\n    return {\n      plugins: [\n        new CompressionWebpackPlugin({\n          // 目标文件名称。[path] 被替换为原始文件的路径和 [query] 查询\n          asset: '[path].gz[query]',\n          // 使用 gzip 压缩\n          algorithm: 'gzip',\n          // 处理与此正则相匹配的所有文件\n          test: new RegExp(\n            '\\\\.(js|css)$'\n          ),\n          // 只处理大于此大小的文件\n          threshold: 10240,\n          // 最小压缩比达到 0.8 时才会被压缩\n          minRatio: 0.8\n        })\n      ]\n    }\n  }\n}, */")]),t._v("\n\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("路由懒加载")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import=()=>{}\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);