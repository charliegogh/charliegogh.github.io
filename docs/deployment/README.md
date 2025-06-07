# 应用部署

## 前端子应用部署指南（Nginx 统一路径）

### 部署机制说明

平台已在服务器配置好统一路径映射，例如：

```nginx
location /web/ {
  root /opt/x/web/;
  index index.html;
  try_files $uri $uri/ /index.html;
}
```

所有子应用只需将构建后的文件夹放入 `/opt/x/web/` 目录下，即可通过以下方式访问：

```
https://x.cnki.net/web/<your-app-name>/
```

无需单独配置 Nginx。

---

### 发布步骤（开发者操作）

以子应用名为 `app` 为例：

1. **构建项目**

    * 配置路径（base）： 
    * x-cli：

      ```js
      // vue.config.js
      module.exports = {
        publicPath: './'
      }
      ```

2. **打包构建**

   ```bash
   npm run build
   ```

3. **上传文件至指定路径**

   ```bash
   cd /opt/x/web/app
   sudo rz dist.zip
   sudo unzip dist.zip
   ```

4. **访问地址验证**

   ```
   https://x.cnki.net/web/app
   ```

---

### ⚠️ 为什么不再推荐“每个子项目单独开路径”

* **流程繁琐**：每次部署都要找网站部开通，效率低；
* **风险较高**：路径重复或误覆盖，可能影响线上已有项目；
* **难以管理**：多个路径分散，不便于统一维护和版本追踪。

## CDN 打包方式说明

在 x-cil 中，通过设置 `publicPath` 实现 **资源路径自动指向 CDN**，如下：

```js
// vue.config.js
publicPath: process.env.VUE_APP_publicPath, // 设置资源路径前缀
```

对应 `.env.production` 中配置：

```env
VUE_APP_publicPath=https://piccachex.cnki.net/xai/
```

---

### 效果说明

打包后资源路径将变为：

```html
<script src="https://piccachex.cnki.net/xai/js/app.abc123.js"></script>
<link href="https://piccachex.cnki.net/xai/css/style.abc123.css" />
```

---

### 适用场景

* 构建产物部署到 **非当前主域名**（如静态资源服务器 / CDN）；
* 需要将资源托管在外部路径（如 OSS、piccachex）；
* 页面 HTML 可以托管在研学前端应用服务器，JS/CSS 从 CDN 加载；

---

### 腾讯cdn中控平台使用说明

> 账号申请统一由技术负责人协调办理；资源上传与目录结构请遵循平台规范（文档负责人：曹怡轩）

🔗 [使用文档地址](https://kdocs.cn/l/cnKPMN3QlI9T)

