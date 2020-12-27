const data  = [
    {
        status:0
    },
    {
        status:0
    },
    {
        status:1
    },
]
// 判断数组每一项元素都为0
const result=data.every(function (item,index,array) {
        return item.status===0
})
console.log(result);

// 检测数组中是否有重复元素
const ary=['1','2','1']
let s = ary.join(",")+",";
for(let i=0;i<ary.length;i++) {
    if(s.replace(ary[i]+",","").indexOf(ary[i]+",")>-1) {
        console.log("数组中有重复元素：" + ary[i])
        break;
    }
}
