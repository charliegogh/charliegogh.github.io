# vue-router

## 路由传参

```
    let param = this.$route.query;
    如果使用query方式傳入的參數使用this.$route.query接收
    如果使用params方式传入的参数使用this.$route.params接收
```

### query方式传参使用方式(避免参数丢失问题)

- 配置动态路由

```
const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User }
  ]
})
```

- 使用 props 将组件和路由解耦

```
const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User, props:true }
  ]
})

new Vue ({
     el:'#app',
     props: ["id"]
})
```





## 路由跳转

1. vue-router push replace go 无法从二级路由跳转到一级路由,使用router-link
2. 跳转到上一页 this.$router.go(-1)

## router-link 参数配置

- to 
- replace(不会留下历史记录) 
- append(在当前路径钱添加基路径)
- tag (渲染成某种标签) 
- active-class 链接激活css类名
- exact 是否激活链接
- event 声明可以用来触发导航的事件。可以是一个字符串或是一个包含字符串的数组。
- exact-active-class 配置当链接被精确匹配的时候应该激活的 class 

## router-view 

```
- name <router-view>设置了名称，则会渲染对应的路由配置中 components 下的相应组件

- mode 配置路由模式 
hash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器。

history: 依赖 HTML5 History API 和服务器配置。查看 HTML5 History 模式。

abstract: 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式。
 
- base  应用的基路径
 
- linkActiveClass 全局配置 <router-link> 的默认“激活 class 类名

- linkExactActiveClass 全局配置 <router-link> 精确激活的默认的 class

```

## scrollBehavior

滚动行为可做滚动监听

## Router实例方法

- router.beforeEach
- router.beforeResolve
- router.afterEach

## 路由对象

路由对象包含当前激活的路由的状态信息,包含了当前URL解析得到的信息,还包括URL匹配的路由记录

### 路由对象属性  {$route:}
 
- $route.path 字符串，对应当前路由的路径
- $route.params 包含了动态片段和全匹配片段
- $route.query 表示 URL 查询参数
- $route.fullPath 解析后的 URL，包含查询参数和 hash 的完整路径
- $route.matched 含当前路由的所有嵌套路径片段的路由记录。路由记录就是 routes 配置数组中的对象副本 (还有在 children 数组)。
- $route.name 当前路由名称
- $route.redirectedFrom 如果存在重定向，即为重定向来源的路由的名字

## 组件注入

- this.$router  $router实例
- this.$route 当前激活的路由信息对象(只读) 可用watch进行监听
