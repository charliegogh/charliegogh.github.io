/**
 * @author charlie
 * @date 2019/2/16
 * @Description:
 * 单例模式
 */
class Singleton {
    constructor() {
    }
}
/**
 * instance作为实例实例对象一开始赋值为null
 * return了一个构造函数,属于实例化对象
 * 立即执行函数返回的是匿名函数用于判断实例是否被创建 执行当调用的时候才会进行实例化
 * 此写法的优势在于不在js加载的时候进行实例化创建,而是在需要的时候进行创建,如果再次调用那么放回的只是第一次调用的结果
 */
Singleton.getInstance = (function() {
    let instance=null
    return function() {
        if (!instance) {
            instance = new Singleton()
        }
        return instance
    }
})()
//
let s1 = Singleton.getInstance()
let s2 = Singleton.getInstance()
// console.log(s1 === s2) // true
let s3=Singleton.getInstance().f1()
console.log(s3);


/**
 * 创建多个模块
 * 实现单例的方式:往外去暴露getInstance方法  直接调用内部的一些静态方法
 */

class Singleton {
    static getInstance(){
        if (!Singleton.instance){
            Singleton.instance=new Singleton();
        }
        return  Singleton.instance;
    }
    constructor() {
        this.f()
    }

    f(){
        console.log(1)
    }
}
