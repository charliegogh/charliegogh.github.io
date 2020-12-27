## 一 let和 const 命令

## 1.1 let命令
### 1.1.1 作用：声明变量，只在 let命令所在的代码块内有效，不存在变量提升
 var会出现变量提升现象，即在变量声明之前使用，此时会导致undefined，let改变语法行为声明的变量必须在声明之后去使用否则报错
```javascript
    for (let i = 0; i < 10; i++) {
        //let声明的变量只在代码块内有效
        console.log(i)
    }
        console.log(i);//报错
```

### 1.1.2 闭包问题：
```javascript
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10
```
使用 let当前 i 只在本轮有效，每一次循环的i 都是一个新的变量，函数内部的变量 i与循环变量 i不在同一个作用域，输出6
```javascript
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6
```

### 1.1.3 变量提升问题，let 不存在变量提升
```javascript
console.log(bar); // 报错ReferenceError
let bar = 2;

```

### 1.1.4 暂时性死区
只要在块级作用域内存在 let 命令，它所声明的变量就"绑定"这个区域，不再受外部影响。
```javascript
var tmp = 123;
if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```
不太容易发现的死区
```
function bar(x = y, y = 2) {
  return [x, y];
}

bar(); // 报错

```
上面代码中，参数 x 默认等于 y 而此时y 没有声明，属于死区，解决办法：
```javascript
function bar(x = 2, y = x) {
  return [x, y];
}
bar(); // [2, 2]

```
暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。



###1.1.5 不允许重复声明 
let不允许在相同作用域内，重复声明同一个变量。

```javascript
// 报错
function func() {
  let a = 10;
  var a = 1;
}

// 报错
function func() {
  let a = 10;
  let a = 1;
}
```
不能在函数内部重新声明参数   
```javascript
function func(arg) {
  let arg; // 报错
}

function func(arg) {
  {
    let arg; // 不报错
  }
}
```
    
###1.1.6 块级作用域   
 ```javascript
function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}
```
上述代码，外层代码块不受内层代码块的影响

ES6允许块级作用域任意嵌套
{{{{{let insane = 'Hello World'}}}}};
内层作用域可以定义外层作用域的同名变量。
```javascript
{{{{
  let insane = 'Hello World';
  {let insane = 'Hello World'}
}}}};

```
块级作用域的出现，实际上使得获得广泛应用的立即执行函数表达式（IIFE）不再必要了。

```javascript
// IIFE 写法
(function () {
  var tmp = ...;
  ...
}());

// 块级作用域写法
{
  let tmp = ...;
  ...
}

```

###1.1.7 块级作用域和函数声明
ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。
```javascript
// 情况一
if (true) {
  function f() {}
}

// 情况二
try {
  function f() {}
} catch(e) {
  // ...
}
```
以上的函数声明, ES5规定是非法的.
但是浏览器没有遵循这个规定,支持在块级作用域中声明函数,不会报错.
ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。
ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。
```
```




## 2. const 命令
基本用法:
  const声明一个只读的常量。一旦声明，常量的值就不能改变。
  const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。
```javascript
const foo;
// SyntaxError: Missing initializer in const declaration

```
  const的作用域与let命令相同：只在声明所在的块级作用域内有效。

```javascript
if (true) {
  const MAX = 5;
}

MAX // Uncaught ReferenceError: MAX is not defined

```
  声明的常量也不提升,在声明之后使用
```javascript
if (true) {
    console.log(MAX); // ReferenceError
    const MAX = 5;
}

```
  const声明的常量，也与let一样不可重复声明

```javascript
var message = "Hello!";
let age = 25;

// 以下两行都会报错
const message = "Goodbye!";
const age = 30;

```


函数扩展
箭头函数
```javascript
var f = v => v;

// 等同于
var f = function (v) {
  return v;
};

```
不需要参数和诸多参数问题
```javascript
var f = () => 5;
// 等同于
var f = function () { return 5 };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};
```
箭头函数代码块部分是一条语句，用大括号将其括起，使用 return 语句返回。
```javascript
var sum = (num1, num2) => { return num1 + num2; }
```
如果代码块为对象，需在函数外面加上括号，否则会报错。
```javascript
// 报错
let getTempItem = id => { id: id, name: "Temp" };

// 不报错
let getTempItem = id => ({ id: id, name: "Temp" });
```
下面是一种特殊情况，虽然可以运行，但会得到错误的结果。

```javascript
let foo = () => { a: 1 };
foo() // undefined
```




