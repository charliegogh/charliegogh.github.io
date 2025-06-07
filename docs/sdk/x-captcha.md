# 研学通用人机校验 x-captcha

xCaptcha 是一个基于阿里云滑动验证码（Aliyun Captcha）的封装类，支持弹窗（`popup`）和嵌入式（`embed`）两种调用模式，提供简洁、可扩展的接口回调方式，适用于业务接入验证码验证流程。

---

## ✅ 特性

- 支持弹窗或嵌入式两种展示模式
- 支持异步加载脚本资源
- 提供标准的 `onVerify`、`onBizResult` 回调接口
- 提供静态工厂方法 `create()`，简化初始化流程
- 支持 `show()` 手动触发验证

---

## 🔧 快速使用

### 1. 引入脚本

通过 `<script>` 标签引入：

```html
<script src="https://piccachex.cnki.net/dynamic/js/x-captcha.js"></script>
````

引入后，浏览器全局将挂载一个对象：

```js
window.xCaptcha // 即 xCaptcha 实例，可直接使用创建验证码实例
```

---

### 2. 创建验证码实例

```js
const captcha = await xCaptcha.create({
  mode: 'popup', // 或 'embed'
  onVerify: async (captchaVerifyParam) => {
    console.log('验证参数：', captchaVerifyParam);

    // 发送给后端进行校验，替换为自己的校验业务
    const result = await fetch('/api/verify', {
      method: 'POST',
      body: JSON.stringify(captchaVerifyParam),
    }).then(res => res.json());

    return {
      captchaResult: result.verifyResult, // 验证码是否通过
      bizResult: true                     // 业务是否通过
    };
  },
  onBizResult: (bizResult) => {
    if (bizResult === true) {
      // 可以继续执行业务流程
    } else {
      alert('业务验证不通过！');
    }
  }
});
```

---

### 3. 手动触发验证码

```js
document.getElementById('verify-btn').addEventListener('click', () => {
  captcha.show(); // 弹出验证码
});
```

---

### 4. 使用 IIFE 模式立即展示

```html
<script>
  (async () => {
    const captcha = await xCaptcha.create({
      mode: 'popup',
      onVerify: async (param) => {
        const result = await fetch('/api/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(param),
        }).then(res => res.json());

        return {
          captchaResult: result.verifyResult,
          bizResult: true
        };
      },
      onBizResult: (bizResult) => {
        if (bizResult === true) {
          // 执行业务流程
        } else {
          alert('业务验证不通过！');
        }
      }
    });

    captcha.show();
  })();
</script>
```

---

## ⚙️ 配置项说明

| 参数名           | 类型         | 默认值      | 描述                     |
| ------------- | ---------- | -------- | ---------------------- |
| `mode`        | `string`   | `popup`  | 验证方式，`popup` 或 `embed` |
| `onVerify`    | `function` | `()=>{}` | 用户点击验证后触发，需返回验证码验证结果   |
| `onBizResult` | `function` | `()=>{}` | 业务验证完成后触发              |

---

## 📦 方法说明

| 方法名              | 说明           |
| ---------------- | ------------ |
| `await create()` | 创建并初始化验证码实例  |
| `show()`         | 手动触发验证码弹出/验证 |

---

## ⚠️ 注意事项

* `onVerify` 回调中**务必返回 `captchaResult`**，否则前端不会关闭弹窗。
* 异步加载脚本采用容错处理，失败时将输出 `console.error` 日志。

---

## 🔗 后端验证接口参考

[点此查看文档](https://365.kdocs.cn/l/cq0afMgmJIb3?from=docs&startTime=1748763872168&createDirect=true&newFile=true)

