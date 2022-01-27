# 

## 1)setup

- 执行时机:初始化执行一次,在beforeCreate之前执行(一次),此时组件对象还没被创建
    - this是undefined,不能通过this来访问data/computed/methods/props
    - 所有composition API 相关回调函数也都不可以
- 函数中如果返回对象,对象中的属性和方法模板中都可以使用
- 返回值
    - 一般都返回一个对象,为模板提供数据,也就是模板中可以直接使用对象的的所有属性/方法
    - 返回对象中的属性会与data函数返回对象的属性合并成为组件对象的属性
    - 返回对象中的方法会与methods中的方法合并成功组件对象的方法
    - 如果有重名, setup优先
    - 一般不要混合使用: methods中可以访问setup提供的属性和方法, 但在setup方法中不能访问data和methods
    - setup不能是一个async函数: 因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性数据
- 参数 
    - setup(props, context) / setup(props, {attrs, slots, emit})
    - props: 包含props配置声明且传入了的所有属性的对象
    - attrs: 包含没有在props配置中声明的属性的对象, 相当于 this.$attrs
    - slots: 包含所有传入的插槽内容的对象, 相当于 this.$slots
    - emit: 用来分发自定义事件的函数, 相当于 this.$emit
    
## 2)ref 

- 作用：定义一个数据的响应式
- 语法: const data = ref(value)
    - 创建一个包含响应式数据的引用(reference)对象
    - js中操作数据:xxx.value
    - 模板中操作数据: 不需要value
- 一般用来定义一个基本数据类型的相应数据     

## 3) reactive

- 作用: 定义多个数据的响应式
- const proxy = reactive(obj):接收一个普通对象然后返回该普通对象的响应式代理器对象
    - 直接使用目标对象得方式来更新目标对象中的成员的值是不可能的,只能使用代理对象的方式来更新数据(响应式数据)
- 响应式转换是"深层的": 会影响对象内部所有嵌套的属性
- 内部基于proxy实现, 通过代理对象操作源对象内部数据都是响应式的
- 注意: 如果操作代理对象,目标对象中的数据也会随之变化,同时如果想要在操作数据的时候,界面也要跟着重新更新渲染,那么也是操作代理对象









