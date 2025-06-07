# `openxBridge` SDK 

`openxBridge` 是知网研学开放平台提供的前端通信 SDK，用于宿主应用与嵌入式子应用之间进行安全、统一的事件驱动通信。支持 iframe 跨窗口通信，并预留对微前端架构（如 Qiankun）兼容支持。

---

## 一、引入方式

### ✅ 通过 `<script>` 标签引入：

```
<script type="text/javascript" src="https://piccachex.cnki.net/openx/sdk/openx-bridge-jssdk-0.0.1.js"></script>
```

引入后，浏览器全局会挂载一个对象：

```
window.openxBridge // 即 openxBridge 实例，可直接使用
```

你可以直接在主应用或子应用中使用以下方式进行通信：

```
openxBridge.$on('messageName', callback)
openxBridge.$broadcast('messageName', data)
openxBridge.$dispatch('messageName', data)
```

## 二、核心 API

### 1. `openxBridge.$on(message: string, cb: Function): void`

注册一个消息监听回调。

### 参数说明：

| **参数名** | **类型** | **说明** |
| --- | --- | --- |
| message | `string` | 消息标识符（唯一） |
| cb | `Function` | 接收到消息后触发的回调函数 |

### 示例：

```
openxBridge.$on('getUserInfo', async (params) => {
  const userInfo = await fetchUserInfo()
  return userInfo
})
```

---

### 2. `openxBridge.$broadcast(message: string, params?: any): Promise<any>`

向 **子应用 iframe** 发送消息（适用于宿主应用调用子应用方法）。

### 参数说明：

| **参数名** | **类型** | **说明** |
| --- | --- | --- |
| message | `string` | 消息标识符 |
| params | `any` | 可选，传递的数据参数 |

### 返回：

一个 `Promise`，子应用处理完毕后返回结果。

### 示例（宿主发消息给子应用）：

```
const res = await openxBridge.$broadcast('loadPaper', { id: 'abc123' })
console.log('子应用返回：', res)
```

---

### 3. `openxBridge.$dispatch(message: string, params?: any): Promise<any>`

向 **宿主应用** 发送消息（适用于子应用调用宿主方法）。

### 参数说明与 `$broadcast` 相同。

### 示例（子应用发消息给宿主）：

```
const res = await openxBridge.$dispatch('getUserInfo')
console.log('宿主返回：', res)
```

---

## 三、事件分发机制说明

### ✅ 子应用调用宿主应用：

```
await openxBridge.$dispatch('xxx', params)
```

宿主应用使用 `$on` 注册 `xxx` 消息处理逻辑。

---

### ✅ 宿主应用调用子应用：

```
await openxBridge.$broadcast('xxx', params)
```

子应用使用 `$on` 注册 `xxx` 消息处理逻辑。

---

## 四、运行环境说明

| **场景** | **是否支持** | **描述** |
| --- | --- | --- |
| iframe 嵌套 | ✅ 支持 | 默认场景，使用 `postMessage` 实现主子应用通信 |
| 微前端（如 Qiankun） | ⚠️ 暂不支持 | 当前版本不支持同上下文通信，需改造通信方式 |

## 五、iframe 要求

宿主应用必须在页面中存在 iframe 元素，并设置 `data-openx-source="openx-app"` 以确保 SDK 正确定位目标 iframe。

### 示例：

```
<iframe src="https://example.com" data-openx-source="openx-app"></iframe>
```

---

## 六、微前端兼容计划

目前 SDK 的通信机制基于 `window.postMessage`，主要服务于 iframe 嵌套场景。对于使用 Qiankun、Single-SPA 等非 iframe 微前端架构的用户，**当前版本不可直接使用**。

我们将在后续版本中：

- 保留现有 API (`$on`, `$broadcast`, `$dispatch`)
- 内部适配不同运行环境（iframe / 微前端）
- 提供自动上下文判断能力，实现即插即用
