let arr=[ {name:"soina",value:'122'},
    {name:"amy",value:'123'},
    {name:"foina",value:'124'}]
let obj={}
arr.map((e,item)=>{
    obj[e.name]=e
})
console.log(obj);
