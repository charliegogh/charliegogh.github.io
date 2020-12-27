#### 三目运算

```
let hungry = true;
let eat; 
if (hungry == true) {
       eat = 'yes'; 
} else {
       eat = 'no';
}
// pro
let hungry = true;
let eat = hungry == true ? 'yes' : 'no';
```

#### 对象增加属性

```
let dyamic = "value";
let user = {
    id:1
}
user[dyamic] = "other value"

let dynamic = "value"; 
let user = {
    id: 1,
    [dynamic] = "other value"
}
```

#### 数组转对象

```
let arr = ["value1", "value2", "value3"]; 
let arrObject = {};
for (let i = 0; i < arr.length; ++i) {
   if (arr[i] !== undefined) {
     arrObject[i] = arr[i];
   }
}
// pro
let arr = ["value1", "value2", "value3"]; 
let arrObject = {...arr}; 
```

#### 对象转数组

```
let number = {
  one: 1, 
  two: 2,
};
let keys = []; 
for (let numbers in numbers) {
  if (number.hasOwnProperty(number)) {
     keys.push(number);
    }
}
// pro
let number = {
  one: 1, 
  two: 2,
};
let key = Object.keys(numbers); // key = [ 'one', 'two' ]
let value = Object.values(numbers);  // value = [ 1, 2 ]
let entry = Object.entries(numbers); // entry = [['one' : 1], ['two' : 2]]
```

#### 短路

```
if (docs) {
    goToDocs();
}
// pro
docs && goToDocs()
```

#### 判断是否为数组

```
const arr = [1, 2, 3]; 
console.log(typeof arr); // object
console.log(Array.isArray(arr)); // true
```

#### == 和 === 的区别

```
console.log(0 == 'o'); // true

console.log(0 === '0'); // false
```
