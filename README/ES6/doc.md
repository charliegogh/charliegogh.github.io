
## let、const命令
- let声明变量
- const声明常量

- 作用域
    - 全局作用域
    - 函数作用域：function() {}
    - 块级作用域：{}
- 作用范围
    - var命令在全局代码中执行
    - const命令和let命令只能在代码块中执行
- 赋值使用
    - const命令声明常量后必须立马赋值
    - let命令声明变量后可立马赋值或使用时赋值
- 声明方法：var、const、let、function、class、import

> 重点

- 不允许重复声明
- 未定义就使用会报错：const命令和let命令不存在变量提升
- 暂时性死区：在代码块内使用let命令声明变量之前，该变量都不可用

## 解构赋值
- 字符串解构：const [a, b, c, d, e] = "hello"
- 数值解构: const { toString: s } = 123
- 布尔值解构: const { toString: b } = true
- 对象解构: 
    - 形式:const { x, y } = { x: 1, y: 2 }
    - 默认:const { x, y = 2 } = { x: 1 }
    - 改名：const { x, y: z } = { x: 1, y: 2 } 
-  数组解构
    - 规则：数据结构具有Iterator接口可采用数组形式的解构赋值
    - 形式：const [x, y] = [1, 2]
    - 默认：const [x, y = 2] = [1]
-  函数参数解构
    - 数组解构：function Func([x = 0, y = 1]) {}
    - 对象解构：function Func({ x = 0, y = 1 } = {}) {}
    
> 应用场景

- 交换变量值：[x, y] = [y, x]
- 返回函数多个值：const [x, y, z] = Func()
- 定义函数参数：Func([1, 2])
- 提取JSON数据：const { name, version } = packageJson
- 定义函数参数默认值：function Func({ x = 1, y = 2 } = {}) {}
- 遍历Map结构：for (let [k, v] of Map) {}  获取键值和键名
- 输入模块指定属性和方法：const { readFile, writeFile } = require("fs")

## 字符串扩展

## 对象扩展



















