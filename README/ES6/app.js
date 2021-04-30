// in 对象
const a ={ test:11}
console.log('test' in a); // true
console.log(a.hasOwnProperty('test') )// true


// 字符串转换成数字
console.log(typeof ~~'111')


// es6将数组转换成对象数组
const arr = ['50g']
console.log();
const obj=Object.entries(arr).map(item=>({name:item}))
console.log(obj);


const arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
}
const arr2 = Array.from(arrayLike)
console.log(arr2);
