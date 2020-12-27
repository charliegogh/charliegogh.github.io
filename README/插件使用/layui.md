> 2020 年 5 月 27 日 09:49:49

## layui-checkbox 阻止切换

- 使用场景
  在切换之前判断用户权限

```javascript
form.on("switch(switchTest)", function (obj) {
  var elem = obj.elem; //触发事件的元素
  var checked = elem.checked; //元素的选择状态
  $(elem).prop("checked", checked ? "" : "checked"); //阻止状态切换
  form.render("checkbox");
});
```

## 阻止图片上传

- 使用场景: 多图上传限制上传数量

```javascript
var fileArray; // 多文件上传队列 记录每次点选数量
var upload_swipePic = upload.render({
  elem: "#goodsRotationchartBtn",
  url: "${base}/admin/electricityPointstoreGoods/uploadOss",
  field: "test",
  size: 1024,
  multiple: true, // 开启多文件上传
  number: 5, // 上传数量

  before: function (obj) {
    fileArray = obj.pushFile();
    layer.msg("图片上传中...", {
      icon: 16,
      shade: 0.8,
      time: 0,
    });
    var len = Object.keys(fileArray).length + multiple_images.length;
    if (len > 5) {
      layer.msg("最多上传五张");
      // 清除队列数据
      for (var i in fileArray) {
        delete fileArray[i];
      }
      setTimeout(function () {
        layer.close(layer.msg());
      }, 2000);
      return false;
    }
  },
  done: function (res) {
    // 清除队列数据
    for (var i in fileArray) {
      delete fileArray[i];
    }
    //如果上传失败
    if (res.success == false) {
      return layer.msg("上传失败");
    } else {
      multiple_images.push(res.data);
      if (multiple_images.length >= 5)
        $("#goodsRotationchartBtn").addClass("none");
      $("#swipePicList").append(
        '<li><img src="' +
          res.data +
          '" class="layui-upload-img"><span class="close swipeDel" onclick="delSwipe($(this))"></span></li>'
      );
      layer.close(layer.msg());
    }
  },
});
```

## 动态显示表格元素

- 使用场景: 根据状态动态显示表格指定单元

```javascript
// 动态显示单元元素
var arr = [
  {
    field: "transferFee",
    title: "转让费(元)",
    width: 150,
    sort: false,
    templet: function templet(d) {
      // return '￥' + d.amoyPrice
      if (d.transferFee != null) {
        return number_format(d.transferFee, 2, ".", ",", "floor");
      } else {
        return "";
      }
    },
  },
];
// 根据状态动态清0
if (curState === "sell") arr.length = 0;
// 动态拼接
cols: [{}, ...arr];
```
