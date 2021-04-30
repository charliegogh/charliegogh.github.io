# js工具集合

## 数组

### 去除数组中的无用值

```javascript
const compact = arr => arr.filter(Boolean);

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); 
// [ 1, 2, 3, 'a', 's', 34 ]
```

### 数组对象根据对象属性进行归类

```javascript
    const data =
    [
      {
        '合肥': '89',
     'date': '2019年11月'
     },
     {
        '太原': '113',
     'date': '2019年1月'
     },
    {
        '太原': '130',
     'date': '2019年1月'
     },
    ]
    
    Object.values(data).reduce((res,v)=>{
        res[v.date] = {...(res[v.date] || {}),...v}
    },{})
```

### 数组去重

1. 使用set
```javascript
function unique (arr) {
  return Array.from(new Set(arr))
}
```
2. 数组对象去重
```javascript
function deWeightThree(arr, tag) {
  const map = new Map()
  for (const item of arr) {
    if (!map.has(item[tag])) {
      map.set(item[tag], item)
    }
  }
  return [...map.values()]
}
```
### 数组中最大值

1. 只比较找出最大值
假定数组中的第一个元素值最大max，循环数组，将max与其他元素做比较，大的值赋给max。循环结束之后，max的值即为最大值。

```js
let max = arr[0]
arr.forEach(item => max = item > max ? item : max)
console.log(max) // 100
```

2. 将整个数组都排序，获取最大值利用array.sort()方法，指定排序函数，来排序数组。当然，你也可以使用其他排序方式，来排序数组。
```js
let AS = arr.sort((a, b) => a - b) 
AS[arr.length-1]  // 获取最大值：100
AS[0] // 获取最小值： -1
```

3. 使用math
```javascript
export const maxArr = (arr)=>{
    return Math.max(...arr)
}
或者
export const maxArr=(arr)=>{
    return Math.max.apply(null,arr)
 }
```

### 排序

1. 纯数组排序
```javascript
 export const orderArr=(arr)=>{
        arr.sort((a,b)=>{
            return a-b //将arr升序排列,如果是倒序return -(a-b)
        })
}
```
2. 数组对象排序
```javascript
export const orderArr=(arr)=>{
        arr.sort((a,b)=>{
            let value1 = a[property];
            let value2 = b[property];
            return value1 - value2;//sort方法接收一个函数作为参数，这里嵌套一层函数用
            //来接收对象属性名，其他部分代码与正常使用sort方法相同
        })
    } 
```

### 检测数组中是否有重复元素

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

### 数组末位置顶

```javascript
const arr = [1,2,34,54]
console.log(arr.concat(arr.shift()));
```

### 多数求和

1. 使用for循环

```javascript
    let S = 0
    const L = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    const n = L.length
    
    for (let i = 0; i < n; ++i) {
        S += L[i]
    }
    console.log(S)
```

2. reduce实现

```javascript
// reduce 实现
const result = L.reduce(function (accumulator,currentValue){
    return accumulator+currentValue
},0)
console.log(result)
```

### 平均数

1. 数组平均数

```javascript
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length
```

2. 数组对象属性平均数

```javascript
const averageBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
  arr.length;
  
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
```

### 根据pid生成树结构

```javascript
var arr = [{id: 1, pid: null}, {id: 11, pid: 1}, {id: 12, pid: 1}]

const nest = (items, id = null, link = 'pid') =>
    items
        .filter(item => item[link] === id)
        .map(item => ({...item, children: nest(items, item.id)}))
```

### 短路运算

1. 全部满足

   ```javascript
   const all = (arr,fn=Boolean)=>arr.every(fn)
   console.log(all([4, 12, 3],x=>x>5));  // 如果全部满足返回true
   ```

2. 有一个满足

   ```
   const all = (arr,fn=Boolean)=>arr.some(fn)
   console.log(all([4, 12, 3],x=>x>5));  // 如果一项满足则返回true
   ```

### 去除数组中的无效/无用值

```javascript
const compact = arr => arr.filter(Boolean);

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); 
// [ 1, 2, 3, 'a', 's', 34 ]
```

### 递归扁平化数组（多维）

```javascript
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```

## 对象

### js去除对象属性中的所有空格

```javascript
JSON.parse(JSON.stringify(obj).replace(/\s+/g, ""))
```



## 字符串

## 去除字符串前面的空格

```javascript
//写一个function，清除字符串前面的空格，（兼容所有的浏览器）
if(!String.prototype.trim){
    String.prototype.trim=function(){
        return this.replace(/^\s+/,"").replace;
    }
}
var str="\t\n test string".trim();
alert(str=="test string");
```


## 浏览器等相关

### http链接过滤host等相关信息

```javascript
const str = 'https://www.fiot-service.org.cn/industry/202103/core-2_3eRR6I7-1616037994738.png'
const str2 = str.split('/').splice(3, str.length - 1).join('/')
```

## 其他

### js将手机中间四位变成*，正则做法

```javascript
    var tel = 18810399133;
    tel = "" + tel;
    var reg=/(\d{3})\d{4}(\d{4})/;
    var tel1 = tel.replace(reg, "$1****$2")
    console.log(tel1);
```

### 批量替换参数信息（前后交互）

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

### 使用递归实现深拷贝

```javascript
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

### 判断数据是undefined、NaN、null的技巧

```javascript
var tmp = null // tmp可以是undefined,NaN,下面的判断都会返回true.
if(!tmp){
    console.log('null or undefined or NaN')
}
```

#### 单独判断null undefined NaN的方法

1. 判断NaN

```javascript
var tmp = 0/0 // tmp可以是undefined,NaN,下面的判断都会返回true.
if(isNaN(tmp)){
    console.log('true')
}
```

2. 判断undefined

```javascript
var tmp = undefined; 
if(!tmp){
    console.log('null or undefined or NaN')
}
```

3. 判断null

```javascript
var tmp = null;
if (!tmp && typeof(tmp)!="undefined" && tmp!=0){ 
   console.log(null)
}
```
