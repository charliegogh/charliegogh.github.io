# 研学jwt工具集成

## 下载
<a href="https://xtest.cnki.net/web/tools/xaxios/xaxios.js" target="_blank" download>点击下载</a>

## 使用demo
<a href="https://xtest.cnki.net/web/tools/xaxios" target="_blank">xaxios</a>

## 使用方式

```html
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
<body>
</body>
<script src="https://picx.cnki.net/x-utils/xaxios.min.js"></script>
<script>
    xaxios
            .getAction('https://xfat.cnki.net/psmc/user/getUserInfo')
            .then(rs=>{
                console.log(rs)
            })
</script>
</html>

```

