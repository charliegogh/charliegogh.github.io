(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{236:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"骨架屏配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#骨架屏配置"}},[e._v("#")]),e._v(" 骨架屏配置")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/34702561",target:"_blank",rel:"noopener noreferrer"}},[e._v("骨架屏"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),a("blockquote",[a("p",[e._v("使用饿了么开源方案")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm install --save-dev page-skeleton-webpack-plugin\nnpm install --save-dev html-webpack-plugin\n")])])]),a("p",[e._v("安装过程中报错提示如下``")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ERROR: Failed to download Chromium r515411! Set "PUPPETEER_SKIP_CHROMIUM_DOWNLOA\nD" env variable to skip download.\n')])])]),a("p",[e._v("执行命令")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm config set puppeteer_download_host=https://storage.googleapis.com.cnpmjs.org\n")])])]),a("h3",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),a("ol",[a("li",[e._v("配置插件")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const { SkeletonPlugin } = require('page-skeleton-webpack-plugin')\nconst path = require('path')\n\nmodule.exports = {\n  configureWebpack: {\n    plugins: [\n      new SkeletonPlugin({\n        pathname: path.resolve(__dirname, './shell'), // 用来存储 shell 文件的地址\n        staticDir: path.resolve(__dirname, './dist'), // 最好和 `output.path` 相同\n        routes: ['/'], // 将需要生成骨架屏的路由添加到数组中\n        excludes: ['.van-nav-bar', '.van-tabbar']  // 需要忽略的css选择器\n      })\n    ],\n  },\n  chainWebpack: (config) => {   // 解决vue-cli3脚手架创建的项目压缩html 干掉\x3c!-- shell --\x3e导致骨架屏不生效\n    if (process.env.NODE_ENV !== 'development') {\n      config.plugin('html').tap(opts => {\n        opts[0].minify.removeComments = false\n        return opts\n      })\n    }\n    \n  },\n};\n")])])]),a("blockquote",[a("p",[e._v("创建完成之后在项目根目录创建shell文件，解决3.0打包的骨架不生效的问题")])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("修改 HTML Webpack Plugin 插件的模板")])]),e._v(" "),a("blockquote",[a("p",[e._v("在启动的App的根元素内部添加")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<body>\n  <div id="app">\x3c!-- shell --\x3e</div>\n  \x3c!-- built files will be auto injected --\x3e\n</body>\n')])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("界面操作生成、写入骨架页面")])]),e._v(" "),a("blockquote",[a("p",[e._v("控制台输入toggleBar 呼出交互界面。")])]),e._v(" "),a("p",[e._v("点击交互界面按钮，预览骨架页面，点击左侧写入shell文件中。")])])}),[],!1,null,null,null);t.default=n.exports}}]);