# 研学文件上传 sdk

## 概述

XUploader 文件上传 SDK 是基于 WebUploader 封装的前端文件上传工具，提供便捷的文件上传功能，支持按需加载、异步加载脚本，并具有高扩展性。该工具适用于各类文档文件的上传场景，具有简洁易用、配置灵活的特点。

## 当前版本

版本号：v0.0.8
发布日期：2025 年 01 月 09 日

版本号：v0.0.7
发布日期：2025 年 01 月 07 日

版本号：v0.0.3
发布日期：2024 年 12 月 31 日

## 使用方法

### 1. 按需加载脚本

```javascript
  function loadScript(src) {
        return new Promise((resolve, reject) => {
            const existingScript = document.querySelector(`script[src="${src}"]`)
            if (existingScript) {
                resolve()
            } else {
                const script = document.createElement('script')
                script.src = src
                script.async = true
                script.onload = () => {
                    resolve()
                }
                script.onerror = reject
                document.head.appendChild(script)
            }
        })
    }
    const loadWebUploader = async() => {
        await loadScript('https://piccachex.cnki.net/openx/utils/jquery-3.3.1.min.js')
        await loadScript('https://piccachex.cnki.net/openx/utils/webuploader.min.js')
        await loadScript('https://piccachex.cnki.net/openx/utils/x-uploader-0.0.7.js')
    }
```

### 2. 初始化并使用 SDK

```javascript
const handle = async () => {
    await loadWebUploader()
    new XUploader({
        pick: {
            id: '#x-upload-doc' // 文件选择器的 DOM ID
        },
        jwtToken: '',           // 客户端认证的 JWT 
        server: '',             // 文件上传服务器地址
        headers: {},             // 附加的头部信息
        onChange: (file) => {   // 文件上传回调
            console.log(file)
            // 文件的上传状态 file.status
            // 状态包括：uploading（上传中），done（上传完成），error（上传失败）
        }
    })
}
```

## webUploader 默认配置项

```javascript
const options = {
        resize: false,                // 是否压缩图片
        dnd: 'body',                  // 支持拖拽的区域
        disableGlobalDnd: true,       // 禁用全局拖拽
        swf: '/psmc/CoreResources/Scripts/upload/Uploader.swf', // SWF 文件路径
        pick: {
            id: '#XUPLOAD',          // 文件选择器的 DOM ID
            multiple: false          // 是否支持多文件选择
        },
        fileVal: 'file',              // 文件字段名称
        formData: {                   // 附加的表单数据
            action: 'upload',
            imgBase64: null
        },
        percentage: false,            // 开启进度功能
        accept: {
            title: '*',
            extensions: 'doc,DOC,docx,DOCX,ppt,PPT,pptx,PPTX,pdf,PDF,caj,CAJ,txt,TXT',
            mimeTypes: '*'
        },
        fileSingleSizeLimit: 52428800, // 单个文件大小限制（50MB）
        auto: true                     // 是否自动上传
      }
```

## 常见问题

- 如何处理 JWT ？
  1. JWT 用于客户端认证，需在实例化时传入有效的 JWT。
  2. 由于文件上传可能存在流失效的情况，SDK 不会自动处理 JWT 的刷新逻辑，因此需要确保在使用前验证 JWT 的有效性，并在必要时提前刷新 JWT。

- 批量上传如何处理 fileList？
  1. 批量上传是一个异步过程，在 onChange 回调中会初次返回 fileList。通过判断 fileList 的长度和每个文件的 status 属性，可以确定所有文件是否上传完成。
