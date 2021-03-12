// Any ↔ 字符串

// toFixed()
console.log(-5.33.toFixed()+1)


// 对象转数组
const data = {
    name:'charlie',
    age: 24
}
const keys = Object.keys(data)

const arr = keys.map(key=>{
    return{
        key,value:data[key]
    }
})
console.log(arr)
// [ { key: 'name', value: 'charlie' }, { key: 'age', value: 24 } ]

// 将第二层的对象用数组表示


const arr2 = keys.map(key=>{
    return[
        key,data[key]
    ]
})


/**
*  lodash 中的 对象转数组 toPairs() 逆转换 fromParis()
* */


const rDataset = [
    { name: "iwillwen", gender: "male" },
    { name: "rrrruu", gender: "female" }
]

rDataset.map(item=>{
    Object.keys()
})







