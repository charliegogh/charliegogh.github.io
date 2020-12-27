let obj={
    name:'charlie',
    age:'24',
    sex:'man'
}
function empty(obj={}){
    for (let i in obj) {
        obj[i]=null
    }
    return obj
}
console.log(empty(obj));
