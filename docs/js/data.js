//
// let arr = [{name: "soina", value: '122'},
//     {name: "amy", value: '123'},
//     {name: "foina", value: '124'}]
// let obj = {}
// arr.map((e, item) => {
//     obj[e.name] = e
// })
// console.log(obj);

// 数组求和

const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0)

console.log(sum(...[1,24,5,6]))

//
