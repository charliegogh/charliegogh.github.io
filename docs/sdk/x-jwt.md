# 研学jwt管理 x-jwt

> 为了保障 JWT 在前端应用中的安全性与一致性，知网研学团队制定了统一的管理规范。本文档介绍的 `x-jwt` 工具是该规范的实现配套工具之一，建议配合标准文档使用以提升协作效率与安全保障。  
> 🔗 [点击查看《知网研学前端应用 JWT 管理标准》](https://365.kdocs.cn/l/caPdTrmInEl4)

---

一个简易的 JWT 存储与管理工具，支持以本地 `localStorage` 方式记录并管理多个 JWT 令牌，可根据需要增删改，或移除过期 Token。

## ✨ 功能特点

- ✅ **添加 JWT**：支持 Token 写入、同名更新、自动预失效处理；
- ✅ **获取 JWT**：按名称获取对应 Token，自动判断是否失效或非当前登录态；
- ✅ **移除 JWT**：支持单个移除或一键清空；
- ✅ **过期清理**：自动清理过期 Token；
- ✅ **多账号隔离**：自动识别登录状态，防止不同账号共用；
- ✅ **支持自定义存储 Key**：通过初始化方法进行隔离或多环境控制。

---

## 📌 版本历史

### v0.0.16 (2025/3/11)

- 新增 `initJwtManager(config)` 方法，支持传入：
  - 自定义 `localStorage` Key；
  - 自定义最大存储条数（`MAX_COUNT`）；
  - 自定义出栈删除条数（`POP_DELETE_COUNT`）；
- 内部默认使用单例，调用 `initJwtManager` 会重置实例；
- 默认配置为 `X_JWT_LIST` 和最大存储 20 条。

### v0.0.15 (2025/3/11)

- `getJwt` 方法增加“未登录清空”处理逻辑。

### v0.0.14 (2025/3/4)

- 增强参数校验逻辑，防止异常调用。

### v0.0.13 (2025/2/17)

- 优化过期前置清理机制；
- 增加超出最大数量时自动移除前5条记录。

### v0.0.9

- 增加 JWT 存储源识别逻辑，防止多账号共享 JWT。

---

## 📦 安装方式

### 通过 npm / yarn

```
# npm
npm install cnki-x-jwt --save

# 或者 yarn
yarn add cnki-x-jwt
```

---

## 🚀 快速开始

### 在项目中使用

### ES Module / JavaScript

```jsx
import { addJwt, getJwt, removeJwt, removeAllJwt, initJwtManager } from 'cnki-x-jwt';

// （可选）初始化配置：自定义 localStorage Key 和最大记录数
initJwtManager({
  storageKey: 'MY_CUSTOM_JWT_LIST',
  maxCount: 30, // 默认为 20，可根据业务场景调整
  popDeleteCount: 5
});

// 添加 JWT
addJwt('userToken', 'xxxx.yyyy.zzzz', 3600);

// 获取 JWT
const token = getJwt('userToken');

// 移除某个 JWT
removeJwt('userToken');

// 移除全部 JWT
removeAllJwt();
```

### script 标签方式使用

如果你使用的是直接 `<script>` 标签引入打包产物（如 `x-jwt-0.0.16.js`），可以通过全局对象访问：

```jsx
<script src="https://piccachex.cnki.net/openx/utils/x-jwt/x-jwt-0.0.16.js"></script>
<script>
  const { addJwt, getJwt, removeJwt, removeAllJwt, initJwtManager } = xJwt;

  // 初始化配置
  initJwtManager({
    storageKey: 'MY_CUSTOM_JWT_LIST',
    maxCount: 30, // 默认为 20，可根据业务场景调整
    popDeleteCount: 5
  });

  addJwt('example', 'xxxx.yyyy.zzzz', 3600);
  const token = getJwt('example');
  console.log(token);
</script>
```

---

## 🧩 API 接口说明

| **方法** | **说明** |
| --- | --- |
| `addJwt(name, token, expiresIn)` | 添加或更新 JWT，自动处理过期和超限（超过 `MAX_COUNT` 自动移除最早插入的记录） |
| `getJwt(name)` | 获取指定名称的 JWT，若未登录或 source 不匹配自动返回 null |
| `removeJwt(name)` | 移除指定名称的 JWT |
| `removeAllJwt()` | 清空所有 JWT |
| `initJwtManager(config)` | 初始化自定义配置，包括 `storageKey` 、`maxCount` 与 `popDeleteCount` |

### ✅ `addJwt(name: string, token: string, expiresIn: number)`

- 添加或更新一个 JWT；
- 内部在设置过期时间时会 **预减去 300 秒** 提前失效处理；
- 若达到最大存储条数，则自动移除最早的 5 条记录。

### ✅ `getJwt(name: string): string | null`

- 获取指定名称 JWT；
- 若当前用户未登录或源不匹配，返回 null。

### ✅ `removeJwt(name: string)`

- 移除指定名称 JWT。

### ✅ `removeAllJwt()`

- 清空全部 JWT 记录。

### ✅ `initJwtManager(config: { storageKey?: string; maxCount?: number；popDeleteCount?:number })`

- **storageKey** *(可选)*：自定义 localStorage 的键名，默认为 `'X_JWT_LIST'`；
- **maxCount** *(可选)*：最大可存储 JWT 的数量，默认 `20`；
- **popDeleteCount** *(可选)*：达到最大存储条数，移除数量，默认 `5`；
- 调用此方法会重新构造内部管理实例。

## 注意事项

- **浏览器限制**：该工具依赖 `localStorage`，仅在浏览器环境有效，且不同域名（含协议、端口）下的存储不互通。
- **Token 自动过期判断**：Token 有效期内部预留 5 分钟提前判断；
- **Token 上限限制**：默认最多存储 20 条记录，超过时移除旧记录；
- **`initJwtManager()` 建议仅在应用初始化阶段调用一次**，避免频繁切换。

---

