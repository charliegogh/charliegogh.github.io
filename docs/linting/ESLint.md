# 📦 代码检查配置（ESLint）

为了保障代码质量一致性、减少低级错误并提升协作效率，`x-cli` 工程模板已默认集成 ESLint 规范，并适配 Vue2 项目的最佳实践。

---

## ✨ 已集成内容

x-cli 基础工程中已默认包含以下配置与依赖：

* `eslint` + `eslint-plugin-vue`，覆盖 JS 与 Vue 文件；
* 解析器使用 `babel-eslint`，支持 ES6+ 语法；
* 基于 `eslint:recommended` 和 `plugin:vue/recommended`；
* 配置文件位于根目录 `.eslintrc.js`；
* VSCode 开发环境自动检查支持（见下方配置）；
* Git commit 前校验（配合 `lint-staged` + `husky`，如有启用）。

---

## 📂 配置说明

默认的 `.eslintrc.js` 规则包括：

| 类型     | 说明                            |
| ------ | ----------------------------- |
| 缩进     | 强制使用 2 空格缩进                   |
| 引号     | 使用单引号 `'single'`              |
| 分号     | 禁止使用分号 `semi: 'never'`        |
| Vue 属性 | `template` 标签支持最多 10 个属性/单行排列 |
| 命名规范   | Vue 组件命名采用 PascalCase 格式      |
| 代码风格   | 禁止多余空格、未使用变量、混合缩进等问题          |
| 调试限制   | 开发环境允许 console，生产环境自动禁用       |

📝 完整规则详见项目内 `.eslintrc.js` 文件。

---

## 🧩 使用方式

### ✅ 本地开发中（VSCode）

建议使用 ESLint 插件配合开发体验：

* 安装插件：[ESLint for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* 配置 `.vscode/settings.json`：

```json
{
  "eslint.validate": ["javascript", "vue"],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

保存文件时自动修复格式问题。

---

### ✅ 命令行执行

> x-cli 项目中通常已内置 npm script，例如：

```bash
npm run lint
```

---

## 🔒 CI 与提交前校验（如有启用）

`x-cli` 工程模板支持可选集成：

* `husky`: 拦截 Git commit；
* `lint-staged`: 提交前只校验变更文件；

如需启用，请参考项目根目录的 `.husky/` 和 `lint-staged.config.js`。

---

## 📚 延伸阅读

* [ESLint 官方文档](https://eslint.org/docs/latest/)
* [Vue ESLint 插件文档](https://eslint.vuejs.org/)

---
