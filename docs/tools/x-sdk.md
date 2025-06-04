# 研学 x-sdk

## 概述

x-sdk 是一款专为研学内部前端开发设计的工具包，旨在简化业务集成并提高维护效率。

### 使用步骤

#### 引用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>xsdk</title>
</head>
<body>
<script src="https://picx.cnki.net/search/common/x-sdk.js"></script>
</body>
</html>
```

## 基础接口

### H5唤起研学 app 接口

在微信 H5 应用中唤起研学 App 功能时，由于微信开放标签唤起功能存在一定限制，当前我们测试验证了以下三种支持方案：

1. 通过微信公众号菜单进入应用后再进行分享操作；
2. 生成二维码，用户扫描二维码后进入应用并进行分享；
3. 用户访问页面后将应用添加至微信收藏夹，再从收藏夹进入应用后进行分享。

此外：
- xsdk 已集成微信开放标签功能，但在使用时请特别注意处理回调函数中返回的失败情况，确保错误信息得到妥善处理。
- 在其他 App 内部打开时，默认会提醒用户切换到浏览器的应用内置浏览器，以保证最佳兼容性。
- 对于在应用内置浏览器中打开的情况，xsdk 完全支持上述功能，确保无缝的使用体验。

#### 微信内部唤起研学 app 使用方法

1. 吊起容器，需指定特定的 class 名称

```html
<div class="x-openApp">
    吊起应用
</div>
```

2. 使用 xsdk 回调函数

```javascript
xsdk.openApp({
    /* 普通浏览器打开配置 */
    target:'readService',
    params: {
        openHtml: 'https://x.cnki.net/activity?openHtml=https://x.cnki.net/xx'
    },
    
    /* 微信内部打开配置 */
    debug: false,
    extinfo: {
        action:'readService',
        actionUrl:'https://x.cnki.net/activity?openHtml=https://x.cnki.net/activity/openApp/'
    },
    // success
    success: (e) => {
        console.log('成功')
    },
    // 失败回调
    error: (e) => {
        // code 40001 微信sdk 初始化失败
        // code 40002 微信sdk 、qq、wb 打开失败
    },
    // 当前设配环境，以下列举所有环境信息
    envCb: (e) => {
        console.log(e)
    }
})
```
3. 环境检测

- 个人电脑端 (PC)
- 微信环境：Android 微信 (Android_wx)、iOS 微信 (ios_wx)
- QQ 环境：Android QQ (Android_qq)、iOS QQ (ios_qq)
- 微博环境：Android 微博 (Android_wb)、iOS 微博 (ios_wb)
- 浏览器平板设备：Android 平板 (Android_pad)、iOS 平板 (ios_pad)、普通平板 (pad)
- 浏览器普通移动设备：Android、ios
- 研学 app 环境：Android_yx、ios_yx、OpenHarmony_yx

4. 错误返回码

| 错误码   | 错误信息         |
|-------|--------------|
| 40001 | 微信 sdk 初始化失败 |
| 40002 | app 唤醒失败     |
