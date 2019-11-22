(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{239:function(e,s,t){"use strict";t.r(s);var n=t(0),a=Object(n.a)({},(function(){var e=this.$createElement,s=this._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[s("p",[this._v("vue会通过object.defineProperty对数据进行劫持，来实现视图数据的变化，有些时候的只是为了纯粹的数据展示，不会有任何的改变，就不需要再让vue\n劫持数据，在大量数据展示的情况下，这样就能够很明显的减少组件初始化的时间，可以通过object.freeze来冻结一个对象，一旦被冻结的对象就再也不能\n被修改了。")]),this._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('export default {\n  data: () => ({\n    users: {}\n  }),\n  async created() {\n    const users = await axios.get("/api/users");\n    this.users = Object.freeze(users);\n  }\n};\n')])])]),s("p",[this._v("另外这里只是冻结了users的值，引用不会被冻结，当我们需要reactive数据的时候，我们可以重新给users赋值")]),this._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('export default {\n  data: () => ({\n    users: []\n  }),\n  async created() {\n    const users = await axios.get("/api/users");\n    this.users = Object.freeze(users);\n  },\n  methods:{\n    // 改变值不会触发视图响应\n    this.users[0] = newValue\n    // 改变引用依然会触发视图响应\n    this.users = newArray\n  }\n};\n')])])])])}),[],!1,null,null,null);s.default=a.exports}}]);