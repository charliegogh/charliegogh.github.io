## timeline

## 0226
1. js new 的过程
2. promise.all的原理
3. this.$nexttick()原理
4. Object.defineProperty()参数
5. history  hash  路由原理
6. 时间循环
7. 微任务
8. diff算法原理
9. 打包优化
10. 事件循环

## 0301 

1. json中可以直接js吗？
    - json是js语言标准的子集并且完全可以直接运行在js引擎中，当然js本身是有可被攻击的可能性，所以在解析json数据内容的时候，并不能直接作为一段js
代码去执行；js提供eval函数用于运行js代码，但解析的json数据并不能保证安全甚至会被恶意篡改，为避免这种情况的出现，有必要去使用现代js中提供的JSON.parse()
进行解码和json.stringify()进行编码。    

2. 
