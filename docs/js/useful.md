# js常用技巧

## 数组








> 20210412

## 批量去除/替换参数信息（适用与后台交互）

````javascript
function replaceStr(data, str) {
  let _data = JSON.stringify(data)
  for (let i = 0; i < str.length; i++) {
    _data = _data.replace(new RegExp(str[i], 'g'), '')
  }
  return JSON.parse(_data)
}
replaceStr(arr,['xxxx'])
````
>  20210318

## http链接过滤host等相关信息

```javascript
const str = 'https://www.fiot-service.org.cn/industry/202103/core-2_3eRR6I7-1616037994738.png'
const str2 = str.split('/').splice(3, str.length - 1).join('/')
```

> 20210316

## 深拷贝实现

```javascript
/* 使用递归实现深拷贝 */
function deepClone(obj) {
    // 如果是 值类型 或 null，则直接return
    if(typeof obj !== 'object' || obj === null) {
        return obj
    }

    // 定义结果对象
    let copy = {}

    // 如果对象是数组，则定义结果数组
    if(obj.constructor === Array) {
        copy = []
    }

    // 遍历对象的key
    for(let key in obj) {
        // 如果key是对象的自有属性
        if(obj.hasOwnProperty(key)) {
            // 递归调用深拷贝方法
            copy[key] = deepClone(obj[key])
        }
    }

    return copy
}
```

## some和every

- every 应用场景：判断数组元素哪一项不符合条件（每一项都返回true才返回true）
- some 只要其中一个返回true就会返回true 

## js取数字后四位

```
value.substr(value.length-4)
```

## js去除对象属性中的所有空格

```js
JSON.parse(JSON.stringify(obj).replace(/\s+/g, ""))
```
## js将手机中间四位变成*，正则做法

```
var tel = 18810399133;
tel = "" + tel;
var reg=/(\d{3})\d{4}(\d{4})/;
var tel1 = tel.replace(reg, "$1****$2")
console.log(tel1);
```
[更多做法](http://www.cnblogs.com/chengkun101/p/7879522.html)

## 去除字符串前面的空格

```js
//写一个function，清除字符串前面的空格，（兼容所有的浏览器）
if(!String.prototype.trim){
    String.prototype.trim=function(){
        return this.replace(/^\s+/,"").replace;
    }
}
var str="\t\n test string".trim();
alert(str=="test string");
```

## 检测数组中是否有重复元素






