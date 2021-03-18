# js常用技巧

## 设置树层级

- [递归设置树层级](https://blog.csdn.net/lh376152/article/details/73847815)    

## 递归查找指定元素

```js
function findData(data, id) {
  if (!data instanceof Array) {
    return null
  }
  for (const i in data) {
    const item = data[i]
    if (item.id === id) {
      return item
    } else if (item.children && item.children.length !== 0) {
      const value = findDistrictCode(item.children, id)
      if (value) {
        return value
      }
    } 
  }
}
```
> 20210316
## 多数求和 
```javascript
// 使用for循环
let S = 0
const L = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
const n = L.length

for (let i = 0; i < n; ++i) {
    S += L[i]
}
console.log(S)
// reduce 实现
const result = L.reduce(function (accumulator,currentValue){
    return accumulator+currentValue
},0)
console.log(result)
```

## 替换字符串 


## 排序
arr.sort() 需要传递一个回调函数，用于对比两个元素
```javascript
const arr3 = [
    {
        name: '1',
        data: 0
    },
    {
        name: '1',
        data: 2
    },
    {
        name: '1',
        data: 14
    }
]
arr3.sort(function (leftTuple,rightTulple){
    return rightTulple['data']-leftTuple['data']
})
```

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

## js取数组最大值

- 使用排序   

(1) 只比较找出最大值
假定数组中的第一个元素值最大max，循环数组，将max与其他元素做比较，大的值赋给max。循环结束之后，max的值即为最大值。

```js
let max = arr[0]
arr.forEach(item => max = item > max ? item : max)
console.log(max) // 100
```

(2)将整个数组都排序，获取最大值利用array.sort()方法，指定排序函数，来排序数组。当然，你也可以使用其他排序方式，来排序数组。

```js
let AS = arr.sort((a, b) => a - b) 
AS[arr.length-1]  // 获取最大值：100
AS[0] // 获取最小值： -1
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

```javascript
const ary=['1','2','1']
   let s = ary.join(",")+",";
   for(let i=0;i<ary.length;i++) {
       if(s.replace(ary[i]+",","").indexOf(ary[i]+",")>-1) {
           console.log("数组中有重复元素：" + ary[i])
           break;
       }
  }
```

