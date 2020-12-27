# axios 统一封装
## 安装
```
npm install axios --save; // 安装axios
```
## 引入
```javascript
import axios from 'axios'; // 引入axios
import qs from 'qs'; // 引入qs模块，用来序列化post类型的数据
```
## 环境切换
根据项目环境所需更改接口url前缀
```javascript
// 环境的切换
if (process.env.NODE_ENV == 'development') {    
    axios.defaults.baseURL = 'https://www.baidu.com';} 
else if (process.env.NODE_ENV == 'debug') {    
    axios.defaults.baseURL = 'https://www.ceshi.com';
} 
else if (process.env.NODE_ENV == 'production') {    
    axios.defaults.baseURL = 'https://www.production.com';
}
```
## 基础配置
```javascript
const service = axios.create({
  baseURL: baseURL, // 动态设置api接口
  withCredentials: true,  // 允许携带token
  timeout: 200000, // 请求超时时间
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // 设置post请求头
})
```

## 请求拦截器
```javascript
service.interceptors.request.use(config => {
    // 每次发送请求之前可根据业务情况做统一操作, 例如将token添加到请求头
  return config
}, error => {
  Promise.reject(error) //
})
```
## 响应拦截器
```javascript
service.interceptors.response.use(
  response => {
    // 每次发送请求之后根据业务情况做统一操作
    if (response.data.code === '101') {
      // router.go(0)   
    }
    return Promise.resolve(response)
  },
  error => {
    const errMsg = error.toString()
    const code = errMsg.substr(errMsg.indexOf('code') + 5)
    // 根据code码反馈用户相应信息
    if (code === '500' || code === '502') {
      Toast('服务器错误')
    }
    if (code === '404') {
      Toast('服务器错误')
    }
    if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
      Toast('您的网络不稳定 请刷新重试')
    }
    if (!window.navigator.onLine) {
      Toast('网络中断')
    }
    return Promise.reject(error)
  }
)
```

## get和post方法统一封装
```javascript
const fetch = (method, url, data = {}, config) => {
  config = config || {}
  config.method = method
  config.url = url
  method.toLocaleLowerCase() === 'get' ? config['params'] = data : config['data'] = data
  return service(config).then(function (res) {
    return res.data
  })
}
const get = (url, data, config) => {
  return fetch('get', url, data, config)
}

const post = (url, data, config, isQs) => {
    return fetch('post', url, data, config)
}
```
## api统一管理
```javascript
import { post,get } from '../fetch'
export const getTabData = () => post('/electricityClassify/classifylist')
```



