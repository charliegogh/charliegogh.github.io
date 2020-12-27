## 判断变量是否为数组
Array.isArray(a) ==> true

## 判断数组是否为空
```javascript
    const arr = [];
    const flag = Array.isArray(arr) && !arr.length;
```

## 验证是否为数组
```javascript
Array.isArray(obj); // its a new Array method
```

## 计算数组元素相加之后的总和 reduce()
```javascript
/**
 * @param total 初始值或者为返回的值
 * @param num 当前元素
 * @param currentIndex 当前元素的索引值
 * @param arr
 * @returns {*}
 */
function getNum(total,num,currentIndex,arr) {
    return total+num
}
arr.reduce(getNum)

```

## indexOf() 
> 返回找到第一个元素的索引 如果没有找到返回-1

## every()
[用法](http://www.runoob.com/jsref/jsref-every.html)

## splice()
> 删除或替换现有元素来修改数组,并以数组形式返回被修改的内容

## findIndex()和find()
- find()用来查找目标元素，找到就返回该元素，找不到返回undefined。   
- findIndex()查看目标元素，找到返回该元素的位置，找不到就返回-1。

## unshift()
> 向数组的开头添加一个或者更多元素
```javascript
let arr=[
    {
        name:'charlie'
    },{
    name:'errol'
    }
]
arr.unshift({name:'asd'})
console.log(arr);
```

## 将数组转化成键值对的形式
1. 数组对象
```javascript
// es6 map实现
let arr=[ {name:"soina",value:'122'},
    {name:"amy",value:'123'},
    {name:"foina",value:'124'}]
let obj={}
arr.map((e,item)=>{
obj[e.name]=e
})
console.log(obj);
// for in 循环实现
var formArr3=[

    {name:"soina",value:'122'},
    {name:"amy",value:'123'},
    {name:"foina",value:'124'},
];

var obj3={}; //定义一个空对象
for(var item in formArr3 ){
    obj3[formArr3[item].name]=formArr3[item].value;
}
console.log(obj3);
```
2. 数组转对象
> Object.entries es7
```javascript
    const arr = ['50g']
console.log();
const obj=Object.entries(arr).map(item=>({name:item}))
console.log(obj);
```

## 获取数组中的最大值和最小值
```javascript
var  numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411]; 
var maxInNumbers = Math.max.apply(Math, numbers); 
var minInNumbers = Math.min.apply(Math, numbers);
```

## ... 数组合并
```javascript
const arr=[1,2,3]
const arr2 =[4,5,6]
const arr3=[...arr,...arr2]
```

## Array.of()
> Array.of方法用于将一组值，转换为数组。

