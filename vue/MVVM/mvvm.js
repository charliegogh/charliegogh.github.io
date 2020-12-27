/**
 * @author charlie
 * @date 2019/11/30 0030
 * @Description:
 * 构造mvvm函数
 * 数据劫持
 * 数据编译
 * 发布订阅
 * 数据更新视图
 * 双向数据绑定
*/
function Mvvm(options={}) {
    // 将所有属性挂载到$options上
    this.$options=options
    let data=this._data = this.$options.data
    observe(data)  // 数据劫持
    new Compile(options.el, this);  // 数据编译
    // 数据代理
    for (let key in data){
        Object.defineProperty(this,key,{
            configurable:true,// 可以配置对象，删除属性
            get() {
                return this._data[key]
            },
            set(newVal) {
                this._data[key] = newVal;
            }
        })
    }
}
/**
 * 数据劫持
 * 观察对象,给对象增加Object.defineProperty
 * vue特点是不能新增不存在的属性 不存在的属性没有get和set
 * 深度响应 因为每次赋予一个新对象时会给这个新对象增加defineProperty(数据劫持)
 **/
function Observe(data) {
    // 所谓数据劫持就是给对象增加get和set
    for (let key in data){
        let val =data[key]
        observe(val) // 递归继续往下找 实现深度劫持
        Object.defineProperty(data,key,{
            configurable:true, // 可以配置对象，删除属性
            get() {
                return val
            },
            set(newVal) {
                if (val===newVal){   // 设置的值和以前的值一样就不用去理会他
                    return
                }
                val=newVal
                observe(newVal)   //  当设置新值之后,也需要把新值再去定义成属性
            }
        })
    }
}

/*新函数 不用每次调用都写new  方便递归使用*/
function observe(data) {
    if (!data || typeof data!=='object') return
    return new Observe(data)
}
/*数据编译*/
function Compile(el,vm) {
    // 將el挂载到实例上方便使用
    vm.$el=document.querySelector(el)
    // 在el范围里将内容都拿到，当然不能一个一个的拿
    // 可以选择移到内存中去然后放入文档碎片中，节省开销
    let fragment = document.createDocumentFragment();   // 创建文档片段，将元素附加到文档片段，然后将文档片段附加到DOM树
    // while (child = vm.$el.firstChild) {
    //     fragment.appendChild(child);    // 此时将el中的内容放入内存中
    // }
    // 对el里面的内容进行替换
    function replace(frag) {
        Array.from(frag.childNodes).forEach(node => {
            let txt = node.textContent;
            let reg = /\{\{(.*?)\}\}/g;   // 正则匹配{{}}
            if (node.nodeType === 3 && reg.test(txt)) { // 即是文本节点又有大括号的情况{{}}
                // console.log(RegExp.$1); // 匹配到的第一个分组 如：a.b, c
                let arr = RegExp.$1.split('.');
                let val = vm;
                arr.forEach(key => {
                    val = val[key];     // 如this.a.b
                });
                // 用trim方法去除一下首尾空格
                node.textContent = txt.replace(reg, val).trim();
            }
            // 如果还有子节点，继续递归replace
            if (node.childNodes && node.childNodes.length) {
                replace(node);
            }
        });
    }

    replace(fragment);  // 替换内容
    vm.$el.appendChild(fragment);   // 再将文档碎片放入el中
}


