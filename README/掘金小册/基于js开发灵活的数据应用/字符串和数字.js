/**
 * 字符串
 */
// 1. 模板字符串
/* 2. 分割字符串 */
// 去除文本中的标点，（直接筛选英文字母和空格，使用ASCII码进行甄别，大写字母在65到90，小写字母在97到122,空格为32）
const originalText ='hello world!'
let str=''
for(let i=0;i<originalText.length;++i){  // ++i 的意义为将其数值加 1
    const letter = originalText[i]
    const asciiCode = letter.charCodeAt() // 将字符串转换成字节码形式
    if((asciiCode>=65 && asciiCode<=90) || (asciiCode>=97 &&asciiCode<=122) || asciiCode===32){
        str+=letter
    }
}
console.log(str)
/* 3. 将所有大写字母转换成小写字母 */
// str.toLowerCase()

/* 4. 字符串分割 */

/* 5. 组装字符串 */
// es6字符串模板

/* 6. 正则匹配 */
// math匹配
/**
* 数字
*/
/* 1. 四则运算 */
/* 2. 优先级 */
/* 3. 幂运算*/
/* 4. 对数运算*/
/* 5. 求和*/
// 多个数求和（利用for循环）
let S = 0
const L = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
const n = L.length

for (let i = 0; i < n; ++i) {
    S += L[i]
}
console.log(S)
/* 6. 求余 */
console.log(5 % 2);
console.log(4 % 2);


