# js工具集合

## 数组

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
### 数组最大值

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
