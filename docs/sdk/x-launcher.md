# 研学app唤醒 x-launcher

## **概述**

**x-launcher** 是一款专为研学平台内部前端场景设计的轻量级唤端工具包，封装了多终端环境（微信、QQ、微博、浏览器等）中唤起研学 App 的通用逻辑，统一处理兼容策略与异常回调。

## **使用方式**

### **引用**

在页面中引入：

```html
<script src="https://piccachex.cnki.net/openx/sdk/x-launcher/x-launcher-0.0.1.js"></script>
```

## **核心能力**

### **在微信内唤起研学 App**

受限于微信的开放策略，直接在 H5 页面中唤起 App 可能存在失败风险。我们推荐以下支持路径：

- **推荐路径一**：用户通过微信公众号菜单进入页面后进行分享操作；
- **推荐路径二**：生成二维码，用户扫码进入页面后进行操作；
- **推荐路径三**：用户将页面添加至微信收藏夹后，从收藏夹打开进行操作。

此外，x-launcher 自动集成微信开放标签功能，并提供以下能力：

- 自动环境检测与日志输出；
- 自动适配不同终端（微信、QQ、微博、App、浏览器）；
- 完善的错误处理与自定义回调机制；
- 浏览器环境中自动引导至外部浏览器打开。

### **使用方法**

### **1. 页面按钮触发唤起**

添加指定 class：

```html
<div class="x-openApp">
 唤起研学 App
</div>

```

### **2. JavaScript 调用**

```jsx
xsdk.openApp({
  // 默认浏览器中唤起 App 的配置
  target: 'readService',
  params: {
    openHtml: 'https://x.cnki.net/activity?openHtml=https://x.cnki.net/xx'
  },

  // 微信等内嵌环境配置
  extinfo: {
    action: 'readService',
    actionUrl: 'https://x.cnki.net/activity?openHtml=https://x.cnki.net/activity/openApp/'
  },

  debug: false,

  // 成功回调
  success: (res) => {
    console.log('成功:', res)
  },

  // 失败回调
  error: (err) => {
    console.error('失败:', err)
    // code 40001: 微信 SDK 初始化失败
    // code 40002: 微信/QQ/微博 等唤起失败
  },

  // 环境信息回调（全量环境标识）
  envCb: (env) => {
    console.log('当前环境:', env)
  }
})

```

## **环境类型说明**

| 终端环境 | 标识符 |
| --- | --- |
| 个人电脑 | `PC` |
| Android 微信 | `Android_wx` |
| iOS 微信 | `ios_wx` |
| Android QQ | `Android_qq` |
| iOS QQ | `ios_qq` |
| Android 微博 | `Android_wb` |
| iOS 微博 | `ios_wb` |
| Android 平板 | `Android_pad` |
| iOS 平板 | `ios_pad` |
| 普通平板 | `pad` |
| 移动浏览器 | `Android`、`ios` |
| 研学 App | `Android_yx`、`ios_yx`、`OpenHarmony_yx` |

## **错误码说明**

| 错误码 | 描述 |
| --- | --- |
| 40001 | 微信 SDK 初始化失败 |
| 40002 | App 唤起失败（含唤端失败、协议不支持等） |
