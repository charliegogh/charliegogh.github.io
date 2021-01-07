
# linux

## 常用指令

1. 删除某个文件夹  rm -rf /xx
2. 新建文件夹   mkdir xx
3. 查看当前文件夹文件    ls
4. 显示所有文件,包括隐藏文件 ls -a

### nginx 使用命令  

1. 重启   nginx -s reload

### 开启 root权限  

sudo -i

### tcp 

1. 查看当前运行端口
netstat -ntlp


## 安装node

```
sudo yum install epel-release
sudo yum install nodejs
```

## pm2 node服务部署安装和使用

###安装

npm install -g pm2

### 启动项目 

pm2 start app.js

### 重启

pm2 -s reload

### 停止

pm2 stop all

### 查看进程状态

pm2 list 

