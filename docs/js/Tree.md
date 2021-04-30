# 树操作
```javascript
const arr = [
  {
    name:'1',
    id:'1',        
    children:[
      {
        name:'2',
        id:'2',
        children:[
          {
            name:'3',
            id:'3',
          }
        ]
      }
    ]
  }
]
```
## 扁平化

```javascript
function flatten (data) {
  return data.reduce((arr, {name, children = []}) =>
    arr.concat([{name}], flatten(children)), [])
}

```
## 查找

```javascript
// 递归 深度优先遍历
function deepQuery(tree,id) {
    var isGet = false;
    var retNode = null;
    function deepSearch(tree,id){
        for(var i = 0; i<tree.length; i++) {
            if(tree[i].children && tree[i].children.length>0) {
                deepSearch(tree[i].children,id);
            }
            if(id === tree[i].id || isGet) {
                isGet||(retNode = tree[i]);
                isGet = true;
                break;
            }
        }
    }
    deepSearch(tree,id);
    return retNode;
}
console.log(deepQuery(arr,'2'))
```

## 模糊查询

```javascript
/**
 * @param data
 * @param value 模糊匹配值
 * @param arr  匹配结果
 * @returns {*|*[]}
 */

export function rebuildData(data, value, arr) {
  const result = arr || []
  data.forEach(item => {
    // 检索末级指标
    if (item.flag === '0' && item.name.indexOf(value) > -1) {
      result.push(item)
    } else if (item.children) {
      return rebuildData(item.children, value, result)
    }
  })
  return result
}
```

## 扁平化数据转树

```javascript
var arr = [{id: 1, pid: null}, {id: 11, pid: 1}, {id: 12, pid: 1}]
const nest = (items, id = null, link = 'pid') =>
    items
        .filter(item => item[link] === id)
        .map(item => ({...item, children: nest(items, item.id)}))
```

## 设置树等级及父id

```javascript
 function formatNavData(data, level = 1, nodeId = '') {
      if (!(data instanceof Array)) {
        return null
      }
      for (const i in data) {
        const item = data[i]
        item.level = level
        item.pid = nodeId
        this.tableLevelData.push(item)
        if (item.children && item.children.length !== 0) {
          this.formatNavData(item.children, level + 1, data[i].id)
        }
      }
      return data
    }
```

## 数据过滤

```javascript
/**
 * @param data 元数据
 * @param child 包含所有父级的数据信息   例如：['中国','山西','太原']
 * @returns {*}
 * 适合场景：权限路由：过滤非权限层级
 */
function filterTreeData(data, child) {
  return data.filter(item => child.indexOf(item.regionName) !== -1).map(item => {
    item = Object.assign({}, item)
    if (item.children) {
      item.children = filterTreeData(item.children, child)
    }
    return item
  })
}
```


