# 研学文件上传 x-uploader 

**XUploader** 是基于 WebUploader 封装的前端文件上传工具，支持按需加载、异步脚本引入，具有高扩展性和良好兼容性。适用于各类文档型文件上传场景，具备**简洁易用、配置灵活、JWT 支持**等特性。

---

## 🚀 当前版本

| 版本号    | 发布日期             |
| ------ | ---------------- |
| v0.0.8 | 2025 年 01 月 09 日 |
| v0.0.7 | 2025 年 01 月 07 日 |
| v0.0.3 | 2024 年 12 月 31 日 |

---

## ⚙️ 使用方法

### 1. 按需加载依赖脚本

```js
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const exist = document.querySelector(`script[src="${src}"]`)
    if (exist) return resolve()
    const script = document.createElement('script')
    script.src = src
    script.async = true
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}

const loadWebUploader = async () => {
  await loadScript('https://piccachex.cnki.net/openx/utils/jquery-3.3.1.min.js')
  await loadScript('https://piccachex.cnki.net/openx/utils/webuploader.min.js')
  await loadScript('https://piccachex.cnki.net/openx/utils/x-uploader-0.0.7.js')
}
```

---

### 2. 初始化并使用 SDK

```js
const handle = async () => {
  await loadWebUploader()

  new XUploader({
    pick: {
      id: '#x-upload-doc', // 文件选择器的 DOM ID
    },
    jwtToken: '',             // JWT 鉴权令牌（必填）
    server: '',               // 上传地址
    headers: {},              // 可选的 header 配置
    onChange: (file) => {
      console.log(file)
      // file.status: uploading | done | error
    }
  })
}
```

---

## ⚙️ 默认配置项（WebUploader Options）

```js
const options = {
  resize: false,
  dnd: 'body',
  disableGlobalDnd: true,
  swf: '/psmc/CoreResources/Scripts/upload/Uploader.swf',
  pick: {
    id: '#XUPLOAD',
    multiple: false
  },
  fileVal: 'file',
  formData: {
    action: 'upload',
    imgBase64: null
  },
  percentage: false,
  accept: {
    title: '*',
    extensions: 'doc,DOC,docx,DOCX,ppt,PPT,pptx,PPTX,pdf,PDF,caj,CAJ,txt,TXT',
    mimeTypes: '*'
  },
  fileSingleSizeLimit: 52428800, // 50MB
  auto: true
}
```

---

## ❓ 常见问题 FAQ

### Q1. 如何处理 JWT？

* JWT 是上传请求的鉴权凭证，必须在初始化时传入；
* SDK **不处理刷新逻辑**，请确保在上传前获取并传入有效的 JWT；
* 上传前建议检查并在失效前主动刷新。

---

### Q2. 如何批量上传并监听上传完成？

* 多文件上传是异步的，所有文件在 `onChange` 中依次返回；
* 每个文件对象带有 `status` 属性（uploading / done / error）；
* 可通过判断 `fileList.every(f => f.status === 'done')` 确认上传是否完成；
* 建议配合前端进度 UI 实现更佳体验。

