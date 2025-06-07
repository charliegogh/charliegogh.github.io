# vite 工程构建

本工程基于 [Vite](https://vitejs.dev/) 构建，采用 React + TypeScript 技术栈，服务于**研学开放平台对外输出场景**，如嵌入式配置页、子应用等。

项目具备类型安全、构建高效、模块解耦等特性，并适配开放平台对接的多环境、多入口、多系统集成需求。

---

## 📁 仓库地址

🔗 [GitLab - openx-cli 工程（React/Vite）](http://gitlab.dev.cnki.net/yanxue-open/openx-app/tree/master/openx-cli)

---

## 💡 技术栈概览

| 技术                 | 说明                        |
|--------------------| ------------------------- |
| **Vite 5**         | 极速冷启动，现代构建，支持原生 ESM       |
| **React 18**       | 函数组件 + Hooks + Context 架构 |
| **TypeScript 严格模式** | 类型约束贯穿全局，辅助开发与重构          |
| **Tailwind CSS**   | 原子化 CSS 框架，快速构建 UI        |
| **ESLint**         | 已统一接入，保障代码风格一致            |
| **Axios（封装）**      | 接口调用统一封装 + 响应处理           |

---

## 🗂 项目结构说明

```bash
openx-cli/
├── public/                 # 静态资源目录（Vite 原样复制）
├── src/                   # 主源代码目录
│   ├── assets/            # 图标、图片等资源
│   ├── components/        # 公共组件（Button, Modal 等）
│   ├── fetch/             # 接口封装（axios 实例 + API 模块）
│   ├── hook/              # 自定义 Hooks
│   ├── layout/            # 页面布局结构（如 Header/Footer）
│   ├── styles/            # 样式定义（Tailwind 基础、全局变量等）
│   ├── types/             # 全局 TS 类型声明（env、接口、用户等）
│   ├── utils/             # 工具函数（缓存、校验、字符串等）
│   ├── App.tsx            # 应用根组件
│   ├── config.ts          # 环境配置与常量定义
│   ├── global.d.ts        # 全局类型声明扩展
│   ├── main.tsx           # 应用启动入口
│   └── UserContext.tsx    # 用户上下文 Provider（用于登录态控制）
│
├── .env.*                 # 多环境变量配置文件（开发/预发/生产）
├── vite.config.ts         # Vite 配置（已配置 alias / base）
├── tailwind.config.js     # Tailwind 样式配置
├── tsconfig.json          # TS 配置（严格模式）
├── .eslintrc.cjs          # ESLint 配置（React + TS）
└── index.html             # 应用 HTML 模板（唯一入口）
```

---

## 🚀 启动与构建命令

```bash
# 安装依赖
pnpm install

# 启动开发环境
pnpm dev

# 构建生产环境
pnpm build

```

---




