# 函数中的this

## 分类
- 默认绑定:没人绑定 this=>window  
- 隐式绑定:谁调用this指向谁 
- 显示绑定:bind apply call  
- new 绑定:优先级最高 

## 默认绑定
> 在全局环境下和调用普通函数的情况
  ```javascript
//全局环境下, this指向的就是 window
         var name='window';
         function show() {
         var name='show';
         console.log(this.name)
         }
         show()  //window         
 // 普通函数调用,也是指向 window
             var obj={
             name:'obj',
                 tellme:function () {
                     setTimeout(function () {
         console.log(this)
                     },1000)
                 }
             }
         
             obj.tellme()//window
```

## 隐式绑定 
> 函数作为对象的一个属性,谁去调用它this 就指向谁
```javascript
    var obj={
        name:'obj',
        show:function () {
            console.log(this.name)
        }
    }
    obj.show()// obj*/
```

## 显式绑定
 使用bind apply call
 ```javascript
window.name='window'
    function show() {
        console.log(this.name)
    }
    var obj={
        name:'obj',
        show:show
    }
    var obj1={
        name:'obj1'
    }
    obj.show()  //obj
    obj.show=show.bind(window)  //window     在 bind 绑定之后是不能改变 this 指向的
    var newShow=obj.show;
    newShow.call(obj);
    show.call(obj1)  //obj1
// new 绑定(使用构造函数创建对象,this 指向的就是 new 出来的对象)
function Preson() {
        ctx={};
        this.name=name
    }
    var p=new Preson('wxd')
    console.log(p);  //Preson
```
