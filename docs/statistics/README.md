# 数据统计

## 📍 研学埋点说明

研学平台前端页面已集成统一的埋点统计能力，用于记录用户关键行为数据（如上传、点击、跳转等）。该功能基于知网埋点服务进行数据采集与事件上报。

---

## 🔗 埋点脚本地址

请确保页面中已加载以下脚本：

```html
<script src="https://piccachex.cnki.net/sta_api/v1/scripts/sensors.min.js?v=20220425"></script>
```

该脚本将自动挂载全局对象：`sta_api`

---

## 🚀 使用方式

通过 `sta_api.toTrack()` 方法上报埋点事件，基本格式如下：

```js
sta_api.toTrack({
  app_id: 'CRSP_BASIC_READ_AI',       // 系统/模块 ID（必填）
  event_id: 'XAI_CHAT_UPLOAD',        // 一级事件 ID（必填）
  event_secondary_id: 'SESSION_DOC'   // 二级事件 ID（可选，表示更精细的事件分类）
})
```

### ✅ 示例场景：AI 对话行为

```js
sta_api.toTrack({
    app_id: 'CRSP_BASIC_READ_AI',                  // 应用/系统 ID（必填）
    event_id: 'READ_LLM',                          // 一级事件 ID（必填）
    event_secondary_id: targetChat.action,         // 二级事件标识（操作行为）
    event_target: targetChat.ask,                  // 主体目标（如用户问题）
    event_secondary_target: targetChat.content     // 次级目标（如回答内容、页面片段）
})
```

---

## 📋 接入规范

1. **统一事件命名**：

    * `event_id` 为一级事件，如 `PAGE_VIEW`, `BTN_CLICK`, `XAI_CHAT_UPLOAD`；
    * `event_secondary_id` 用于二级维度分类，如具体按钮、操作区域标识；
2. **调用前务必完成事件备案登记**。

---

## 📌 备案要求

在正式使用某个埋点前，请按如下流程完成统计事件备案：

* 打开埋点事件登记表（Excel/表单）；
* 填写以下字段并做备案：

    * `app_id`（所属系统模块）
    * `event_id`
    * `event_secondary_id`
  
* 提交至产品确认

👉 **[点击进入埋点事件备案文档](https://www.kdocs.cn/l/ciP8mEXuTQSY)**
