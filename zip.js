const fs = require('fs')
const archiver = require('archiver')
const path = require('path')
function compressDir(inputDir, outputZip) {
  // 创建一个输出流到你的压缩文件
  const output = fs.createWriteStream(outputZip)

  // 创建一个archiver实例，设置压缩格式为zip
  const archive = archiver('zip', {
    zlib: { level: 9 } // 压缩级别（0-9）
  })

  // 监听错误事件
  archive.on('error', (err) => {
    throw err
  })

  // 将输出流 pipe 到 archiver 实例
  archive.pipe(output)

  // 将目录添加到压缩文件中
  archive.directory(inputDir, false)

  // 完成压缩操作
  archive.finalize()

  // 当压缩完成时的回调
  output.on('close', () => {
    console.log(`压缩完成，总共压缩了 ${archive.pointer()} 字节`)
  })
}

compressDir(path.join(__dirname, './docs/.vuepress/dist'), path.join(__dirname, './' + (process.env?.OUTPUT_DIR || 'dist') + '.zip'))
