(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{236:function(a,t,e){"use strict";e.r(t);var s=e(0),l=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"form表单常用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#form表单常用"}},[a._v("#")]),a._v(" form表单常用")]),a._v(" "),e("ol",[e("li",[a._v("input限制输入数字")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("oninput=\"value=value.replace(/[^\\d]/g,'')\"\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("限制输入位数")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('max-length="xx"\n')])])]),e("ol",{attrs:{start:"3"}},[e("li")]),a._v(" "),e("h2",{attrs:{id:"常用正则表达式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用正则表达式"}},[a._v("#")]),a._v(" 常用正则表达式")]),a._v(" "),e("ol",[e("li",[a._v("手机号")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("/^1\\d{10}$/\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("密码长度验证")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[a._v("用户名")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("/^[a-zA-Z0-9_-]{4,16}$/\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[a._v("email")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" /^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$/\n")])])]),e("ol",{attrs:{start:"5"}},[e("li",[a._v("企业名称 (数字-字母-中文)")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("/^[\\u4e00-\\u9fa5_a-zA-Z0-9]+$/\n")])])]),e("ol",{attrs:{start:"6"}},[e("li",[a._v("身份证")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('   <input type="text"\n                     maxlength="18"\n                     placeholder="请输入法人身份证号"\n                     v-model="enterFrom.corporateCard"\n                     @blur.prevent="resetScroll()"\n              >\n')])])]),e("p",[a._v("7.统一社会信用代码")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("/^[^_IOZSVa-z\\W]{2}\\d{6}[^_IOZSVa-z\\W]{10}$/g\n")])])]),e("ol",{attrs:{start:"8"}},[e("li",[a._v("姓名")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('  <input type="text" placeholder="请输入持卡人真实姓名"\n                 v-model="form.name"\n                  maxlength="5"\n                 @blur.prevent="resetScroll()"\n\n            >\n')])])]),e("ol",{attrs:{start:"9"}},[e("li",[a._v("银行卡号19位")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('  <input type="number" placeholder="请输入银行卡号"\n                 v-model="form.card"\n                 oninput="if(value.length>=19)value=value.slice(0,19)"\n                 onkeyup="value=value.replace(/[^\\d]/g,\'\') "\n                 @blur.prevent="resetScroll()"\n                 pattern="\\d*"\n          >\n')])])]),e("ol",{attrs:{start:"10"}},[e("li",[a._v("手机号")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('  <input type="number"\n                 placeholder="请输入银行预留手机号"\n                 v-model="form.phone"\n                 @blur.prevent="resetScroll()"\n                 maxlength="11"\n                 oninput="if(value.length>=11)value=value.slice(0,11)"\n                 onkeyup="value=value.replace(/[^\\d]/g,\'\') "\n                 pattern="\\d*"\n\n          >\n')])])]),e("ol",{attrs:{start:"11"}},[e("li",[a._v("输空判断")])]),a._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[a._v("msg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("split")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('" "')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("join")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("length "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" \n")])])]),e("p",[a._v("12.输入钱处理,只能取到分")]),a._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[a._v('<input type="text"\n               step="1"\n               min="0"\n               v-model="formPrice"\n               onkeyup="value= value.match(/\\d+(\\.\\d{0,2})?/) ? this.value.match(/\\d+(\\.\\d{0,2})?/)[0] : \'\'"\n               onblur=\'value=value.replace(/^[0]+[0-9]*$/gi,"")\'\n               @blur.prevent="resetScroll()"\n')])])])])}),[],!1,null,null,null);t.default=l.exports}}]);