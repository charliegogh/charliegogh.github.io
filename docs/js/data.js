
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


// Array form()
const data = '1123123'
console.log(Array.from(data));
