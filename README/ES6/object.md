- 判断是否为对象

- 判断对象是否为空
```javascript
Object.keys(arr).length
```

- 是否有某个属性
1. in对象
```javascript
const a ={ test:11}
'test' in a  // true
```
2. hasOwnProperty检测对象的某个属性是否存在
```javascript
const a ={ test:11}
a.hasOwnProperty('test') // true
```


- 对象转数组 
```javascript
Array.prototype.slice.call(arguments);
```

