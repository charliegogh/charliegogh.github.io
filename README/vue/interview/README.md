# vue面试题汇总

## 1. Class 与 Style 如何动态绑定

## 2. class和style的几种表达方式

> class和style的几种表达方式

:class 绑定变量 绑定对象 绑定一个数组 绑定三元表达式
:style 绑定变量 绑定对象 绑定函数返回值 绑定三元表达式

## 3.简述MVVM

全称： Model-View-ViewModel，也就是把MVC中C演变成ViewModel，Model代表数据模型，View代表UI组件，ViewModel是View和Model层的桥梁，数据绑定到ViewModel层并渲染到页面中，来推动数据变化。

## 4.简单说一下Vue2.x响应式数据原理

Vue在初始化数据时，会使用Object.defineProperty重新定义data中的所有属性，当页面使用对应属性时，首先会进行依赖收集(收集当前组件的watcher)如果属性发生变化会通知相关依赖进行更新操作(发布订阅)。
> 收集数据 -> 更新视图

## 5. nextTick的原理

[用法]在下次DOM更新循环之后执行延迟回调,在修改数据后立即使用该方法,获取更新后的DOM
[详细链接](https://github.com/haizlin/fe-interview/issues/363)

## 6. style加scoped属性的用途和原理

在标签上绑定了自定义属性,防止css全局污染
在使用ui框架时如果加scope不会被覆盖,在使用预编译的前提下可以在最外层用id包裹

## 7.template有什么用

当做一个不可见的包裹元素，减少不必要的DOM元素，整个结构会更加清晰。

## 8.v-show 与 v-if 有什么区别？

v-if 是真正的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建；
也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。       
v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 的 “display” 属性进行切换。
所以，v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景；v-show 则适用于需要非常频繁切换条件的场景。

## 9. Vue.observable

类轻量级vuex，用作状态管理。

## 10. vue中使用this注意点

尽量多的去使用箭头函数，防止this指向问题。

## 11. watch的属性用箭头函数定义结果会怎么样

[vue] watch的属性用箭头函数定义结果会怎么样？
this为undefined
因为箭头函数默绑定父级作用域的上下文，所以不会绑定vue实例，所以 this 是undefind

## 12. 组件中的data为什么是一个函数

一个组件被复用多次的话，也就会创建多个实例。本质上，这些实例用的都是同一个构造函数。如果data是对象的话，对象属于引用类型，会影响到所有的实例。所以为了保证组件不同的实例之间data不冲突，data必须是一个函数。

## 13. 如何实现强制刷新组件

1. 定义空路由，跳转并自动回退，重新执行当前组件生命周期。
2. 使用v-if

## 14. 说说你对 SPA 单页面的理解，它的优缺点分别是什么

SPA（ single-page application ）仅在 Web 页面初始化时加载相应的 HTML、JavaScript 和 CSS。一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转；取而代之的是利用路由机制实现 HTML 内容的变换，UI 与用户的交互，避免页面的重新加载。
> 优点： 

- 用户体验好、快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染；
- 基于上面一点，SPA 相对对服务器压力小；
- 前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；

> 缺点：

- 初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载；
- 前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；
- SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。

## 15. vue-router怎么重定向页面

定义空路由，跳转并自动回退，重新执行当前组件生命周期。

## 16. v-if和v-for的优先级是什么？如果这两个同时出现时，那应该怎么优化才能得到更好的性能？

v-for 的优先级更高
避免出现这种情况，如果实在需要，则在外嵌套template，在这一层进行v-if判断，然后在内部进行v-for循环，避免每次只有v-if只渲染很少一部分元素，也需要遍历同级的所有元素

## 17. 如何解决vue打包vendor过大的问题？

1、在webpack.base.conf.js新增externals配置，表示不需要打包的文件，然后在index.html中通过CDN引入

```javascript
externals: {
    "vue": "Vue",
    "vue-router": "VueRouter",
    "vuex": "Vuex",
    "element-ui": "ELEMENT",
    "BMap": "BMap"
  }

```

2、使用路由懒加载 

## 18. vue如何监听键盘事件？

@keyup.enter

## 19. [vue] 删除数组用delete和Vue.delete有什么区别？

- delete：只是被删除数组成员变为 empty / undefined，其他元素键值不变
- Vue.delete：直接删了数组成员，并改变了数组的键值（对象是响应式的，确保删除能触发更新视图，这个方法主要用于避开 Vue 不能检测到属性被删除的限制）


## 20.怎么在watch监听开始之后立即被调用？

[immediate参数](https://cn.vuejs.org/v2/api/#vm-watch)

## 21. watch如何做深度监听

deep:true

## 22. watch和计算属性有什么区别？

1. 一个是侦听属性，一个是计算属性
2. 一个是为了应对复杂的逻辑计算，一个是对数据的变化作出反应
3. 一个是只有当缓存改变时才执行，一个是只要从新渲染就会执行
4. 一个有缓存，一个没有缓存

## 23. 什么是 mixin？

Mixins 使我们能够为 Vue 组件编写可插拔和可重用的功能。如果你希望在多个组件之间重用一组组件选项，例如生命周期 hook、方法等，
则可以将其编写为 mixin，并在组件中简单地引用它。然后将 mixin 的内容合并到组件中。如果你要在 mixin 中定义生命周期 hook，
那么它在执行时将优先于组件自己的 hook 。

## 24. 在开发过程中，如果你的 Vue 程序和后端 API 服务器未在同一主机上运行，该如何代理 API 请求。假设使用 Vue-CLI 3 进行设置？

```javascript
module.exports: {
    devServer: {
        proxy: {
            '/api': { 
                target: ‘http://localhost:4040/api’, 
                changeOrigin: true 
            }
        }
    }
}
```

## 25. prop 如何指定其类型要求？

通过实现 prop 验证选项，可以为单个 prop 指定类型要求。这对生产没有影响，
但是会在开发阶段发出警告，从而帮助开发人员识别传入数据和 prop 的特定类型要求的潜在问题。

```javascript
props: {
    accountNumber: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
   },
   favoriteColors: Array
}
```

## 26. 什么时候调用 “updated” 生命周期 hook ？

在更新响应性数据并重新渲染虚拟 DOM 之后，将调用更新的 hook。
它可以用于执行与 DOM 相关的操作，但是（默认情况下）不能保证子组件会被渲染，尽管也可以通过在更新函数中使用 this.$nextTick 来确保。

## 27. 渲染项目列表时，“key” 属性的作用和重要性是什么？
 
## 28. 在模板中渲染原始 HTML？



