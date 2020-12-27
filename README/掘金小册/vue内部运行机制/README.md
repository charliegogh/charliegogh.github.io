## 初始化及挂载 
在new Vue() 之后，Vue会调用 _init 函数进行初始化，会初始化生命周期、事件、props、methods、data、computed与watch等。
最重要的是通过Object.defineProperty设置setter和getter函数，用来实现响应式和依赖收集。

- $mount挂载组件
初始化之后调用$mount会挂载组件,如果是运行时编译,即不存在 render function 但是存在 template 的情况，需要进行「编译」步骤。

### 编译compile

compile 编译可以分成 parse optimize generate 三个阶段 最终需要得到render function

- parse 
parse会用正则等方式解析template模板中的指令 class style等数据 形成AST

- optimize
- generate
将AST转换成render  function 字符串的过程 得到结果是render的字符串以及staticRenderFns字符串

经历以上三个阶段之后 组件中就会存在VNode 所需要的render function


## 响应式

