# 研学加密工具

## 使用方式

```javascript
<script src="https://picx.cnki.net/x-utils/x-crypto.js"></script>
<script>
    // 加密
    const data = $$.encryptData({
    name:'charlie'
})
    // 解密
    const data2 =$$.decryptData(data)
    console.log('加密',data)
    console.log('解密',data2)
</script>
```
## 按需加载

- promise 形式
```javascript
export default function loadCryptoScript() {
  return new Promise((resolve, reject) => {
    const existingScript = document.querySelector(
      'script[src="https://picx.cnki.net/x-utils/x-crypto.js"]',
    )
    if (existingScript) {
      resolve()
    } else {
      const script = document.createElement('script')
      script.src = 'https://picx.cnki.net/x-utils/x-crypto.js'
      script.async = true
      script.onload = () => {
        resolve()
      }
      script.onerror = reject
      document.head.appendChild(script)
    }
  })
}
```

- 回调函数形式
```javascript
function loadCryptoScript(callback) {
  const existingScript = document.querySelector(
      'script[src="https://picx.cnki.net/x-utils/x-crypto.js"]',
  )
  if (existingScript) {
    callback()
  } else {
    const script = document.createElement('script')
    script.src = 'https://picx.cnki.net/x-utils/x-crypto.js'
    script.async = true
    script.onload = () => {
      callback()
    }
    script.onerror = ()=>{
      callback(false)
    }
    document.head.appendChild(script)
  }
}
```
