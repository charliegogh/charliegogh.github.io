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
    } else {
      // 没找到直接return
      return null
    }
  }
}
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
