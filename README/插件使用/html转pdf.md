## HTML 原生页面中 导出为 PDF

1. 引入 js 文件

```javascript
<!-- 引入jQuery -->
<script src="../../global/js/createPDF/html2canvas.js"></script>
<script src="../../global/js/createPDF/jspdf.debug.js"></script>
```

2. 在引入插件之后在写入 导出 按钮 以及方法

```javascript
document.getElementById("btn-html2canvas").onclick = function(){
    var targetDom = $("#content"); // 想要导出的HTML区域
    <!-- 克隆一份导出区域的HTML代码并且追加到页面，这样能使的导出的区域不只是可视区域 -->
    var copyDom = targetDom.clone();
    copyDom.width(targetDom.width() + "px");
    copyDom.height(targetDom.height() + "px");
    copyDom.attr("id", "content2") // 改变克隆区域的id， 方便导出加载完成之后删除
    $('body').append(copyDom);
    html2canvas(copyDom, {
        onrendered: function(canvas) {
            $('#content2').remove(); // 删除克隆的HTMLdaima
            //通过html2canvas将html渲染成canvas，然后获取图片数据
            var imgData = canvas.toDataURL('image/png');

            //初始化pdf，设置相应格式
            var doc = new jsPDF("p", "mm", "a4");

            //这里设置的是a4纸张尺寸
            doc.addImage(imgData, 'png', 0, 0,210,297);

            //输出保存命名为content的pdf
            doc.save('content.pdf');
        }
    });
}
```
