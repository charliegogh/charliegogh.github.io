(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{233:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"filereader-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filereader-对象"}},[t._v("#")]),t._v(" FileReader 对象")]),t._v(" "),s("h3",{attrs:{id:"构造函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构造函数"}},[t._v("#")]),t._v(" 构造函数")]),t._v(" "),s("h4",{attrs:{id:"new-filereader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-filereader"}},[t._v("#")]),t._v(" new FileReader()")]),t._v(" "),s("p",[t._v("返回一个新构造的 FileReader。")]),t._v(" "),s("h4",{attrs:{id:"属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),s("ul",[s("li",[t._v("FileReader.readyState"),s("br"),t._v("\n表示 FileReader 状态的数字，取值如下\n"),s("ul",[s("li",[t._v("0：EMPTY/还没有加载任何数据")]),t._v(" "),s("li",[t._v("1：LOADING/数据正在被加载")]),t._v(" "),s("li",[t._v("2：DONE/已完成全部的读取请求")])])]),t._v(" "),s("li",[t._v("FileReader.result"),s("br"),t._v("\n文件的内容。该属性仅在读取操作完成后才有效。")]),t._v(" "),s("li",[t._v("FileReader.error")])]),t._v(" "),s("h4",{attrs:{id:"事件及方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件及方法"}},[t._v("#")]),t._v(" 事件及方法")]),t._v(" "),s("p",[t._v("主要是用 FileReader.onload 事件及 FileReader.readAsDataURL() 方法。")]),t._v(" "),s("ul",[s("li",[t._v("FileReader.onload"),s("br"),t._v("\n处理 load 事件。该事件在读取操作完成时触发")]),t._v(" "),s("li",[t._v("FileReader.readAsDataURL() 开始读取指定的 Blob 中的内容。\n一旦完成，result 属性中将包含一个 data: URL 格式的字符串以表示所读取文件的内容。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//继续使用上文的fileList")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" file "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fileList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fileReader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileReader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfileReader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readAsDataURL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//读取图片")]),t._v("\nfileReader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'load'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 读取完成")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fileReader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// res是base64格式的图片")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"formdata-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#formdata-对象"}},[t._v("#")]),t._v(" FormData 对象")]),t._v(" "),s("p",[t._v("FormData 对象的使用：")]),t._v(" "),s("ol",[s("li",[t._v("用一些键值对来模拟一系列表单控件：即把 form 中所有表单元素的 name 与 value 组装成 一个 queryString")]),t._v(" "),s("li",[t._v("异步上传二进制文件。")])]),t._v(" "),s("h3",{attrs:{id:"构造函数-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构造函数-2"}},[t._v("#")]),t._v(" 构造函数")]),t._v(" "),s("p",[t._v("new FormData() 返回一个新构造的 FormData。")]),t._v(" "),s("h3",{attrs:{id:"方法-主用append-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法-主用append-方法"}},[t._v("#")]),t._v(" 方法(主用append()方法)")]),t._v(" "),s("blockquote",[s("p",[t._v("formData.append(name, value, filename)")])]),t._v(" "),s("ul",[s("li",[t._v("name:属性名")]),t._v(" "),s("li",[t._v("value:属性值，在我们这里则指 file 数据")]),t._v(" "),s("li",[t._v("filename:当第二个参数为 file 或 blob 时，告诉服务器的文件名。Blob 对象的默认文件名是“blob”。\nFile 对象的默认文件名 是文件的文件名。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 继续使用上文的file")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" formDate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FormData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nformDate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'userPicture'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"使用-axios-上传"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-axios-上传"}},[t._v("#")]),t._v(" 使用 axios 上传")]),t._v(" "),s("p",[t._v("主要是设置 header 中的 Content-Type")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//继续使用上文的formDate")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'multipart/form-data'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\naxios\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'serverUrl'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" formDate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("a",{attrs:{href:"https://juejin.im/post/5c2dd1855188257c30462962",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文章"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);