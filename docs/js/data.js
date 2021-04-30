// 平均数
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length

// 树结构转化
var arr = [{id: 1, pid: null}, {id: 11, pid: 1}, {id: 12, pid: 1}]
const nest = (items, id = null, link = 'pid') =>
    items
        .filter(item => item[link] === id)
        .map(item => ({...item, children: nest(items, item.id)}))
console.log(nest(arr, null));

// 全等判断
const all = (arr,fn=Boolean)=>arr.every(fn)
console.log(all([4, 12, 3],x=>x>5));

// null,undefined,NaN 判断
var tmp = null // tmp可以是null,undefined,NaN,下面的判断都会返回true.
if(!tmp){
    console.log('null or undefined or NaN')
}
