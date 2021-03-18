/**
 * 数组
 */
/* 1.长度 */
let arr = [1, 2, 4]
console.log(arr.length);

/* 2.修改内容 */
// 添加
// 尾部
arr.push(1)

// 首部
arr.unshift(2)

// 指定位置
// \\ array.splice(start, deleteCount, element1[, ...[, elementN]]) 第二个参数设置为0的时候，该方法第三个以及后面的参数便会插入到
// \\ 下标的start的位置，后面的元素自动往后推导
arr.splice(2, 0, 3)

// 查找内容
// \\filter

// 删除内容
arr.splice(3, 1)

// 更新内容
arr[0] = 12

/* 3. 封装数组操作工具 */
const arrUtils = {
    append(array, ...elements) {
        array.push(...elements)
        return array
    },
    /* */
    prepend(array, ...elements) {
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
    }
}


/* 4.以数组为单位的基本处理方法 */
// array.map(callback)
arr.map((x) => {
    return x + 2
})

// 聚合
// reduce 数组元素之和
let arr2 = [1, 2, 3]
let sumResult = arr2.reduce((left, right) => {
    return left + right
})
console.log('reduce', sumResult);


const arr3 = [
    {
        name: '1',
        data: 0
    },
    {
        name: '1',
        data: 2
    },
    {
        name: '1',
        data: 14
    }
]
arr3.sort(function (leftTuple,rightTulple){
    return rightTulple['data']-leftTuple['data']
})
console.log(arr3);



