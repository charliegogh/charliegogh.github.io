# timeLine

## 202101

### 0103

1. slice() 数组截取问题


### 0107 

1. echarts柱状图和折线混合情况，折线出现偏移问题

- 添加配置项
``` javascript
series: [ { name: 'xxxx', barGap: '-100%'
    }
]
```





## 11

### 1107
> 09点56分
- [table设置tr border失效](https://blog.csdn.net/u010533511/article/details/51097150)

> 14点04分
- [script-loader在全局执行脚本](https://www.webpackjs.com/loaders/script-loader/)

> 14点48分
- 页面滚动到底部
```
    window.scrollTo(x,y)
// x: 起始位置
// y: 结束位置  到底部y可以获取页面整体高度 或者元素高度
```
    
### 1201

- [JS 中对 URL 进行转码与解码](https://www.cnblogs.com/lvmylife/p/7595036.html)

- 单个图片(oss)开发环境导出

1. 配置 oss 图片支持跨域访问
2. url 图片转 base64
3. base64 转 blob
4. 触发 a 链接下载

### 1209 

- 四种请求头常见设置
    1. application/x-www-form-urlencoded 
        post提交数据方式，需要对参数qs序列化
    2. multipart/form-data 
        post提交方式，使用表单上传文件，必须让form的enctyped等于这个值，配合ajax提交需要配合formData去使用    
    3. application/json
        post提交方式，告诉服务器消息主体是序列化（JSON.stringify）的JSON字符串，适合深层数据提交，
    4. text/xml
        没用过，    

### 1214

#### some和every
- every 应用场景：判断数组元素哪一项不符合条件（每一项都返回true才返回true）
- some 只要其中一个返回true就会返回true 

#### json中可以运行js代码（上海面试问题）

js引擎中提供了一个eval函数以用于运行js代码，但是需要解析的json数据并不能保证安全甚至可以被恶意篡改，为避免这种情况的出现，
可使用js提供的JSON.parse() 和json.stringify函数进行解码。
