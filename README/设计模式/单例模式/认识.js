//最简单的一个单例
/*全局只暴露timeTool对象,在需要使用的时候直接调用;即是单例模式的体现*/
let timeTool = {
    name: '处理时间工具库',
    getISODate: function() {},
    getUTCDate: function() {}
}


