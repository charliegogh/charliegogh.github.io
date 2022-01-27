## timeline

### 1021

1. 判断某字符串是否在一组字符串中
```javascript
const str = '解读啥啥啥'
const arr = ['解读', '一图读懂']
arr.some(item=>item.includes(str))
```

### 1014

1. 关于前端列表搜索，find要比filter好点，find找到符合条件项就会停止不会继续遍历

2. 关于输入非空判断
```javascript
if(value !== null && value !== undefined && value !== ''){
    //...
}
```
使用es6中的空值合并运算符
```javascript
if((value??'') !== ''){
  //...
}
```
> 空值合并运算符(??)是一个逻辑运算符，当左侧的操作数为null或者undefined时，返回右侧操作数，否则返回右侧操作数

3. promise.all中，其中一个promise报错，如何确保执行到最后
```
   var p1 = new Promise((resolve, reject) => {
   	resolve('p1');
   });
   var p2 = new Promise((resolve, reject) => {
   	resolve('p2');
   });
   var p3 = new Promise((resolve, reject) => {
   	reject('p3');
   });
   Promise.all([p1, p2, p3].map(p => p.catch(e => '出错后返回的值' )))
     .then(values => {
       console.log(values);
     }).catch(err => {
       console.log(err);
     })
```

### 0809  

1. 正则匹配可以只有 0 但开头不能是 0 的数字

``` javascript
const getCorrectNumber = (str = '') => /^(\d|[1-9]\d*)$/.test(str);
getCorrectNumber('0'); // true
getCorrectNumber('011'); // false
getCorrectNumber('101'); // true
```

2. 正则判断字符重复次数不超过两次
```javascript
const strIsRepeatThan2 = (str = '') => /^(?!.*(.).*\1{2})[\da-zA-Z].+$/.test(str);
strIsRepeatThan2('123456'); // true
strIsRepeatThan2('1234566'); // true
strIsRepeatThan2('12345666'); // false
```

3. 判断数据类型
```javascript
const type = data => {
      let toString = Object.prototype.toString;
      const dataType =
        data instanceof Element
          ? 'element' // 为了统一DOM节点类型输出
          : toString
              .call(data)
              .replace(/\[object\s(.+)\]/, '$1')
              .toLowerCase()
      return dataType
};

type({}); // object
```
