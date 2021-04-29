# axios 统一封装

## 安装

```
npm install axios --save; // 安装axios
```
## 引入

```javascript
import axios from 'axios'; // 引入axios
import qs from 'qs'; // 引入qs模块，用来序列化请求头为'application/x-www-form-urlencoded'数据
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
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },  // 设置post请求头
  // 不同请求头配置不同data
  transformRequest: [
    function(data, config) {
      const ContentType = config['Content-Type']
      if (ContentType === 'application/x-www-form-urlencoded') {
        // 序列化
        return qs.stringify(data)
      } else {
        // json格式
        config['Content-Type'] = 'application/json;charset=UTF-8'
        return JSON.stringify(data)
      } else {
        return data
      }
    }
  ]
})
```

## 请求拦截器

```javascript
service.interceptors.request.use(config => {
 // 在请求之前判断token是否存在 否=>请求阻止
  if (!getToken()) {
    if (typeof config.requireToken === 'undefined' || config.requireToken === true) {
      config.cancelToken = source.token // 阻止请求
    }
  }
 // 配置token信息，这里以vuex为基础
 const token = store.getters.token
  if (token && config.needToken === undefined) {
    config.headers['Authorization'] = 'JWT ' + token
  }
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
            
    }
    return Promise.resolve(response)
  },
  error => {
    const errMsg = error.toString()
    const code = errMsg.substr(errMsg.indexOf('code') + 5)
    // 根据code码反馈用户相应信息
    if (code === '500' || code === '502') {
      alert('服务器错误')
    }
    if (code === '404') {
      alert('服务器错误')
    }
    if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
      alert('您的网络不稳定 请刷新重试')
    }
    if (!window.navigator.onLine) {
      alert('网络中断')
    }
    // 获取错误响应结果 error.response
    
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

const post = (url, data, config) => {
    return fetch('post', url, data, config)
}
```

## api统一管理

```javascript
import { post,get } from '../fetch'
export const getTabData = () => post('/electricityClassify/classifylist')
```

## 四种请求头常见设置

1. application/x-www-form-urlencoded 
    post提交数据方式，需要对参数qs序列化
2. multipart/form-data 
    post提交方式，使用表单上传文件，必须让form的enctyped等于这个值，配合ajax提交需要配合formData去使用    
3. application/json
    post提交方式，告诉服务器消息主体是序列化（JSON.stringify）的JSON字符串，适合深层数据提交，
4. text/xml
    没用过，
