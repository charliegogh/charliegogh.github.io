/*
 * @Author: charlie
 * @Date: 2020-01-24 18:19:21
 * @LastEditTime : 2020-02-03 16:03:59
 * @Description: 文件转换成base64
 */
const fs = require('fs');
function base64_encode(file) {


    // read binary data
    var bitmap = fs.readFileSync(file);

    // return 'data:text/css;base64,'+new Buffer(bitmap
    // ).t
    // oString('base64');  // css
    return 'data:image/jpeg;base64,'+new Buffer(bitmap).toString('base64');  // img
}
console.log(base64_encode('l.png'))

