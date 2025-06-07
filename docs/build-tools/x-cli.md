# 研学基础工程脚手架 x-cli

## **🔗 仓库地址**

👉 [http://gitlab.dev.cnki.net/read/x-cli](http://gitlab.dev.cnki.net/read/x-cli)

## 📌 版本历史

### v1.0.2 (2025/6/5)
- 研学实名认证业务接入

### v1.0.1 (2025/4/5)
- 研学 JWT SDK 接入

---

## 📁 目录

- [🔍 打包分析](#打包分析)
- [🌍 多环境变量配置](#配置多环境变量)
- [🔐 权限认证机制](#权限认证)
- [🌐 Proxy 多环境代理配置](#proxy-多环境代理)
- ✅ 添加 CSS 浏览器兼容前缀
- ✅ 添加别名 alias
- ✅ 配置 externals 引入 CDN 资源
- ✅ 使用 splitChunks 拆分第三方模块
- ✅ 开启 gzip 压缩
- ✅ 移除 console.log
- ✅ ESLint 代码检测
- [📝 Git 提交代码规范检测](#git-提交代码检测)
- ✅ 提供便捷 Sass 扩展类
- [✅ 按需加载研学业务组件](#按需加载研学业务组件)
- [📦 研学 JWT SDK](#研学JWTSDK)
- [✅ 研学场景实名认证](#研学场景实名认证)

## 🔍 打包分析

```bash
npm run preview
```

## 🌍 配置多环境变量

- 在根目录创建如下环境文件：
    - `.env`
    - `.env.production`
    - `.env.xtest` 等

- 变量说明：
    - `NODE_ENV` / `BASE_URL`: 全局通用变量
    - 必须以 `VUE_APP_` 开头的变量才可在客户端代码中使用：
      ```js
      process.env.VUE_APP_BASE_API
      ```
    - `vue.config.js` 中读取的变量名称可自定义。

---

## 🔐 权限认证

---

## 🌐 Proxy 多环境代理配置

### 研学业务情况
- 服务众多，传统方法难以应对多域名形式下的业务需求。
- 以下是如何根据环境变量读取需要代理的域名文件，确保在不同的环境下能够自主选择合适的配置：

```javascript
const VUE_APP_FLAG = process.env.VUE_APP_FLAG
const env = {
  'dev.pro': require('./production'),
  'dev.dev': require('./xdev'),
  'development': require('./xtest'),
  'xtest': require('./xtest'),
  'production': require('./production')
}
const proxy = env[process.env.VUE_APP_ENV] || require('./xtest')
const getBaseUrl = (url) => {
  let finalUrl = url
  if (VUE_APP_FLAG !== 'development') {
    Object.keys(proxy).forEach(key => {
      if (url.includes(key)) {
        finalUrl = finalUrl.replace(key, proxy[key].target)
      }
    })
  }
  return finalUrl
}
```
- 注意
    1. axios 需在指定环境下统一处理最终映射的 url，也就是代理配置中的 target地址。
    2. 环境配置文件映射：将各环境标识与其对用的配置文件关联，确保代码逻辑清晰。

### 🛠 代理配置内容（proxy）

```
 '/proxy-api': {
    open: false,
    ws: false,
    target: 'https://x.x.x/',
    changeOrigin: true, //
    pathRewrite: { '^/proxy-api': '' },
    headers: {
      referer: 'https://x.x.x/',
      origin: 'https://x.x.x/'
    }
  },
```

### ⚠ 注意事项：

1. pathRewrite 代理重写：会对项目中所有携带 x 的请求进行替换
2. 突破 refer 验证：一些接口会对 refer 做校验，可在 headers 添加配置
3. 注意代理名称不要与真是业务名称重复或相同，否则配置会失效。

---

## 📦 按需加载研学业务组件

### 问题：
研学组件为 Vue 2 构建并以 `UMD` 格式打包，需通过 `<script>` 标签全局引入。  
若一次性加载所有组件，首页资源体积过大。

### ✅ 解决思路：
1. **拆分组件**：组件粒度更细。
2. **按需加载**：
- 动态加载指定组件：
  ```js
   import Vue from 'vue'
      export default function loadScript(src, module) {
    return new Promise((resolve, reject) => {
      if (window[module]?.default) {
        resolve(window[module].default)
      } else {
        const script = document.createElement('script')
        script.src = src
        script.async = false
        script.onload = () => {
          if (module) {
            if (Vue) {
              Vue.use(window[module].default)
            }
          }
          resolve(window[module].default)
        }
        script.onerror = reject
        document.head.appendChild(script)
      }
    })
  }
  ```
---

## 📝 Git 提交代码检测

### 🔍 相关配置文件：
- `.eslintignore`：忽略检测的路径或文件

### ✅ Git 提交检测实践：

- 使用 **lint-staged** + **husky** 实现提交前校验
- 推荐阅读：
    - [eslintignore 忽略配置](https://juejin.cn/post/7007603848080523278)
    - [git 提交检测方案](https://juejin.cn/post/7112740765150756895)

---

## 📦 研学 JWT SDK

- 使用研学统一 jwt 管理工具，env 中 VUE_APP_JWT_KEY 为统一存储 key

详细说明文档：

📎 [研学jwt管理 x-jwt](https://x.cnki.net/web/docs/sdk/x-jwt.html)


## 🔐 研学场景实名认证处理规范

为确保用户访问研学平台过程中具备合法身份，部分服务接入了“知网统一实名认证中心”进行身份校验与跳转处理。

---

### ✅ axios 拦截处理：识别状态码 `429001`

当服务端返回状态码 `429001`，表示用户尚未完成实名认证，前端需**调用中转跳转接口**，进入认证流程。

---

#### 🔁 跳转流程说明

1. **返回码识别**：服务端返回 `429001` + 认证必要参数；
2. **中转跳转接口**：前端调用统一接口，服务端返回 `302` 重定向；
3. **用户跳转至实名认证中心**（如 my.cnki.net）完成绑定；
4. **回跳业务页面继续操作**。

---

详细实名接入说明文档：

📎 [《WEB 实名认证中转方案》 · 金山文档](https://365.kdocs.cn/l/cu7bGYUASVJn)
