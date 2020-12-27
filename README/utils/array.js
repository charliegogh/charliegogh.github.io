
/* 数组常用方法封装 */
export const arrUtils={
    /* 尾部填充 */
    append(array,...elements){
        array.push(...elements)
        return array
    },
    /* 首部添加 */
    prepend(array,...elements) {
        array.unshift(...elements)
        return array
    },
    /* 插入 */
    insert(array, index, ...elements) {
        array.splice(index, 0, ...elements)
        return array
    },
    /* 删除 */
    remove(array, index) {
        array.splice(index, 1)
        return array
    },
    /* sum */
    sum(array){
        return arr.reduce((left,right)=>{return left+right})
    },
    /* 累乘 */
    multi(array){
        return arr.reduce((left,right)=>{return left*right})
    }
}
