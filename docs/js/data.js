const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length

var arr = [{id: 1, pid: null}, {id: 11, pid: 1}, {id: 12, pid: 1}]

const nest = (items, id = null, link = 'pid') =>
    items
        .filter(item => item[link] === id)
        .map(item => ({...item, children: nest(items, item.id)}))

console.log(nest(arr, null));
