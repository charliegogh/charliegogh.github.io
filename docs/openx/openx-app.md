# 三方平台前端集成应用

本项目为知网研学开放平台前端应用集合，采用微前端架构，统一管理多个子项目及工具模块。

---

## **🔗 仓库地址**

👉 [http://gitlab.dev.cnki.net/yanxue-open/openx-app](http://gitlab.dev.cnki.net/yanxue-open/openx-app)

## 📁 项目结构说明

```
openx-app/
├── cnki.team/ # 主基座应用
├── openx-auth/ # 授权中心模块（权限鉴权）
├── openx-bridge/ # 应用跳转中转页，根据应用 ID 转发至目标地址
├── openx-cli/ # 构建脚本与工具
├── openx-etrans/ # 双语翻译
├── openx-formula/ # 极度公式
├── openx-identity-auth/ # openx 身份认证中心
├── openx-kingdraw/ # kingdraw
│ ├── editor/ # kingdraw 编辑器
│ └── search/ # kingdraw 搜索
├── openx-login/ # openx登录模块
├── x-login/ # 研学统一登录
├── pnpm-workspace.yaml # pnpm 多项目配置
└── package.json # 根 package，统一脚本管理
```


---

## 🧱 技术栈

- react + Vite
- Vue2全家桶
- pnpm workspace 管理
- concurrently 多项目并发开发

---

## 🛠️ 常用命令

```bash
pnpm install                 # 安装所有依赖
pnpm dev:team               # 启动主基座
pnpm dev:login              # 启动登录模块
