var pre = {
    age:18,
    getAge:function (){
        return this.age
    }
}
const getAge = pre.getAge
console.log(getAge())



var a = []
a[1]=1
console.log(a.length);
// 2

console.log('6'+7)
//67

var u
    x=1
console.log(++x+x)
//  4

console.log(1)
setTimeout(function (){
    // console.log(2)
},0)
console.log(3)

// 1 3 2

console.log(typeof null)  // Object
console.log(typeof undefined)  // undefined

