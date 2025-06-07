# 🧩 组件库说明（yxpt-webComponents）

`yxpt-webComponents` 是知网研学平台统一维护的通用组件库，适用于中后台场景、运营页等业务。

该库由 Vue 2.x 构建，采用 `UMD` 格式打包输出，支持**按需异步加载**，并已通过 `x-cli` 工程模板默认集成基础引导。

---

## 🧰 使用方式（x-cli 项目中）

通过 `x-cli` 创建的工程已默认集成组件加载方案，包括：

* ✅ **支持异步加载**：大型/低频组件支持运行时按需引入（详见下方示例）；
* ✅ **统一结构约定**：通用组件放置在 `@/components/`，业务组件放置在 `@/components/x/`；
* ✅ **UMD 格式兼容性好**：适配主应用、微前端及 iframe 场景。

---

## 🚀 异步加载示例（推荐方式）

如需按需加载某个组件（如 `login`），可通过动态插入 `<script>` 实现：

```js
import Vue from 'vue'

export function loadComponent(src, globalName) {
  return new Promise((resolve, reject) => {
    if (window[globalName]?.default) {
      resolve(window[globalName].default)
      return
    }

    const script = document.createElement('script')
    script.src = src
    script.onload = () => {
      if (window[globalName]?.default) {
        Vue.use(window[globalName].default)
        resolve(window[globalName].default)
      } else {
        reject(new Error('模块加载失败'))
      }
    }
    script.onerror = reject
    document.head.appendChild(script)
  })
}
```

调用示例：

```js
await loadComponent(
  'https://piccachex.cnki.net/dynamic/js/login.js',
  'login'
)
```

---

## 🗂 仓库地址

📦 组件库 Git 仓库：
👉 [http://gitlab.dev.cnki.net/psmc-wxCode/yxpt-webComponents](http://gitlab.dev.cnki.net/psmc-wxCode/yxpt-webComponents)

* 打包格式：UMD
* 使用方式：静态资源加载或全局引入

---

## 📌 组件类型举例

| 组件名           | 描述          |
|---------------| ----------- |
| `XTable`      | 通用表格封装      |
| `XForm`       | 表单项组合渲染     |
| `XDialog`     | 弹窗结构封装      |
| `XPagination` | 分页控件封装      |
| `XPopover`    | 弹出提示内容组件    |
| `collect`     | 文献收藏交互组件    |
| `footer`      | 通用底部 Footer |
| `login`       | 登录组件        |
| `member-buy`  | 会员权益购买页面    |
| `top`         | 页面 top 导航   |
| `equity`      | 权益中心功能模块    |




