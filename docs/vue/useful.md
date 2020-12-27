# vue实用技巧

## vue重置data数据
Object.assign(this.$data, this.$options.data())

## 非vuex状态共享
1. 如果应用不够大,避免代码冗余,使用vue2.6新增的Observable API 来实现简单的跨组件数据共享

首先创建一个store.js，包含一个store和一个mutations，分别用来指向数据和处理方法。
```javascript;
import Vue from "vue";

export const store = Vue.observable({ count: 0 });

export const mutations = {
  setCount(count) {
    store.count = count;
  }
};
```
然后在App.vue里面引入这个store.js，在组件里面使用引入的数据和方法
```vue
<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <p>count:{{count}}</p>
    <button @click="setCount(count+1)">+1</button>
    <button @click="setCount(count-1)">-1</button>
  </div>
</template>

<script>
import { store, mutations } from "./store";
export default {
  name: "App",
  computed: {
    count() {
      return store.count;
    }
  },
  methods: {
    setCount: mutations.setCount
  }
};
</script>

<style>
```

## require.context()

1.场景:如页面需要导入多个组件,原始写法:
```javascript
    import titleCom from '@/components/home/titleCom'
    import bannerCom from '@/components/home/bannerCom'
    import cellCom from '@/components/home/cellCom'
    components:{titleCom,bannerCom,cellCom}
```
2.这样就写了大量重复的代码,利用 require.context 可以写成
```javascript
    const path = require('path')
    const files = require.context('@/components/home', false, /\.vue$/)
    const modules = {}
    files.keys().forEach(key => {
      const name = path.basename(key, '.vue')
      modules[name] = files(key).default || files(key)
    })
    components:modules
```
3.API 方法
```javascript
    实际上是 webpack 的方法,vue 工程一般基于 webpack,所以可以使用
    require.context(directory,useSubdirectories,regExp)
    接收三个参数:
    directory：说明需要检索的目录
    useSubdirectories：是否检索子目录
    regExp: 匹配文件的正则表达式,一般是文件名
```

## redirect自动刷新页面

- 自动刷新清除当前页面缓存
```javascript
// 先注册一个名为 `redirect` 的路由
    <script>
    export default {
      beforeCreate() {
        const { params, query } = this.$route
        const { path } = params
          /* 延迟回退 防止清除缓存时报错 */
        setTimeout(() => {
          this.$router.replace({ path: '/' + path, query })
        }, 20)
      },
      render: function(h) {
        return h() // avoid warning message
      }
    }
    </script>

    // 手动重定向页面到 '/redirect' 页面
    const { fullPath } = this.$route
    this.$router.replace({
      path: '/redirect' + fullPath
    })
```

## 给router-view添加唯一key

- 场景
    1. 创建和编辑的页面使用的是同一个component,默认情况下当这两个页面切换时并不会触发vue的created或者mounted钩子，
官方说可以通过watch $route的变化来做处理，但其实说真的还是蛮麻烦的。后来发现其实可以简单的在 router-view上加上一个唯一的key，来保证路由切换时都会重新渲染触发钩子。
    2. 还有就是在当前路由进入外链接换取不同参数, 部分安卓机router中无法及时获取参数信息问题(一般建议分多个路由获取)

## 在v-for中去使用函数

```vue
<template>
  <div>
    <div v-for="(item,key) in list" :key="key">
      {{filterList(item)}}
    </div>
  </div>
</template>
```
``` javascript
<script>
export default {
  name: 'ex',
  data () {
    return {
      list: [0, 1, 2]
    }
  },
  methods: {
    filterList (item) {
      if (item > 0) {
        return '大于0'
      } else {
        return item
      }
    }
  }
}
</script>
```

## 监听组件生命周期

父组件Parent和子组件Child，如果父组件监听到子组件挂载mounted就做一些逻辑处理，常规的写法可能如下:
```javascript
// Parent.vue
<Child @mounted="doSomething"/>

// Child.vue
mounted() {
  this.$emit("mounted");
}
```

子组件不需要任何处理，只需要在父组件引用的时候通过@hook来监听即可，代码重写如下：
```javascript
<Child @hook:mounted="doSomething"/>
```

## 使用函数式组件

函数式组件，即无状态，无法实例化，内部没有任何生命周期处理方法，非常轻量，因而渲染性能高，适合用来只依赖外部数据传递而变化的组件
写法如下：
1. 在template标签里面标明functional
2. 只接受props值
3. 不需要script标签

```
<!-- List.vue 函数式组件 -->
<template functional>
  <div>
    <p v-for="item in props.items" @click="props.itemClick(item);">
      {{ item }}
    </p>
  </div>
</template>
```

```vue
<!-- App.vue -->
<template>
  <div id="app">
    <List
      :items="['Wonderwoman', 'Ironman']"
      :item-click="item => (clicked = item)"
    />
    <p>Clicked hero: {{ clicked }}</p>
  </div>
</template>

<script>
import List from "./List";

export default {
  name: "App",
  data: () => ({ clicked: "" }),
  components: { List }
};
</script>
```

## vue.router中replace需要返回两次问题及解决方案
> 问题：

现有三个页面a , b , c , 递进关系，a页面router.push跳转至b，b再router.push跳转至c，c使用$router.replace()回到b，
然后点击b页面的返回键，需要点击两次才能回到a页面。

> 需求：

c保持router.replace至b方式不变，b页面返回键点击一次正常返回a页面

>解决方法：

使用replace方法之后，再使用router.go(-1)方法返回一次就可以。

> 原理：

1. router.push : 跳转到新的页面，向history栈添加新一个新纪录，点击返回，返回到上一级页面。
2. router.replace: 打开新的页面，不会像history添加新纪录，而是直接替换掉当前记录。
3. router.go: 在history有记录的情况下，前进后退相应的页面。    
页面的跳转记录就是：a->b->c->b    
页面的堆栈记录则是：a->b->b   
那么返回的时候路线就是b->b->a，相当于b页面有两个，但由于b页面是一模一样的，所以视觉上是觉得点了两次返回键。  
那么解决的思路就很清晰了，减少history中的b的记录，就是在用b替换c页面记录同时，回退一页，记录就变成a->b，返回的时候自然是直接回到a。   

## vue h5输入框弹起解决方案

```
      @blur.prevent="resetScroll()"
      resetScroll() {
                    window.scroll(0, 0);
      },
```

## vue输入框模糊搜索

## vue跳转参数缺失问题

> 场景： 带参项目跳转，第一次参数无法接收

- 解决办法
    1. history模式待测试。
    2. 将参数放在#号之前，采用原生方式获取。
