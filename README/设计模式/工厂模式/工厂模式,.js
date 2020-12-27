/**
 * @author charlie
 * @date 2019/2/2
 * @Description:
 * 设计模式之工厂模式
 * 特点:隐藏了创建实例的复杂度,主需要提供一个接口
 */
class Man {
    constructor(name){
        this.name=name
    }
    output(){
        console.log(this.name)
    }
}
class Factory {
    static create(name){
        return new Man(name)
    }
}
Factory.create('charlie').output()