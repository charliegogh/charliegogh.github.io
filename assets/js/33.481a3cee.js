(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{232:function(t,n,e){"use strict";e.r(n);var s=e(0),a=Object(s.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("a",{attrs:{href:"https://juejin.im/post/5d4d2e9bf265da0391350326",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack首屏性能优化"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"现有方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#现有方案"}},[t._v("#")]),t._v(" 现有方案")]),t._v(" "),e("ol",[e("li",[t._v("externals")])]),t._v(" "),e("blockquote",[e("p",[t._v("三方库cdn转换")])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("开启gzip压缩 (以cli3为例)\nconst isPro = process.env.NODE_ENV === 'production'")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*  configureWebpack: config => {\n  if (isPro) {\n    return {\n      plugins: [\n        new CompressionWebpackPlugin({\n          // 目标文件名称。[path] 被替换为原始文件的路径和 [query] 查询\n          asset: '[path].gz[query]',\n          // 使用 gzip 压缩\n          algorithm: 'gzip',\n          // 处理与此正则相匹配的所有文件\n          test: new RegExp(\n            '\\\\.(js|css)$'\n          ),\n          // 只处理大于此大小的文件\n          threshold: 10240,\n          // 最小压缩比达到 0.8 时才会被压缩\n          minRatio: 0.8\n        })\n      ]\n    }\n  }\n}, */")]),t._v("\n\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("路由懒加载")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import=()=>{}\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);