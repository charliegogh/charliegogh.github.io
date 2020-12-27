[nginx 反向代理和负载均衡策略实战案例](https://mp.weixin.qq.com/s/J14CrLs5OfetO6AcUT3kjQ)

[Nginx 与前端开发](https://juejin.im/post/5bacbd395188255c8d0fd4b2?utm_source=gold_browser_extension)

[跨域配置](https://juejin.im/post/5c0e6d606fb9a049f66bf246#heading-6)

# nginx 相关配置

## 官网

nginx.org

## 配置环境

### 系统环境:centOS

用 yum 进行安装必要程序

```
    yum -y install gcc gcc-c++ autoconf pcre-devel make automake
    yum -y install wget httpd-tools vim
```

## 快速搭建 nginx

### 安装

1. 查看 yum 是否存在:

```
yum list | grep nginx
```

2. 使用需求的 yum 版本

```
	vim /etc/yum.repos.d/nginx.repo
```

终端输入 nginx 官网提供的源
注意设置对应的系统和版本号
yum install nginx 进行安装

## 基本的文件配置

### 查看 nginx 安装目录:

```
 rpm -ql nginx
```

nginx.conf 为 nginx 总的配置文件，搭建服务器需要经常去调整

### 服务器启动、停止、重启

- centos7 版本中直接去使用 nginx 启动服务
- 使用 systemctl 命令启动:

```
	 systemctl start nginx.service
```

#### 查询 nginx 是否被启动

```
ps aux | grep nginx
```

#### 停止 nginx

1. 立即停止服务

```
nginx  -s stop
```

2. 从容停止服务

```
nginx -s quit
```

3. killall 方法杀死进程
   killall nginx

4. systemctl 停止

```
systemctl stop nginx.service
```

#### 重启

```
systemctl restart nginx.service
```

#### 重新载入配置文件

重新编写或修改 nginx 配置文件后进行重新载入

```
nginx -s reload
```

## 自定义错误页面和访问设置

类别:多错误指向一个页面
把错误码换成一个地址:

```
error_page  404 http://xxx;
```

### 访问控制

只允许特定主机访问

```
 location / {
        deny   123.9.51.42;
        allow  45.76.202.231;
    }
```

## 权限问题

### 指令的优先级

先出现的设置会覆盖后出现的设置

### 复杂访问控制权限匹配

设置需求：对网站下的图片目录可以去访问，对于 admin 目录则只允许公司内部固定 IP 去访问

### 详细配置

```
location =/img{
        allow all;
    }
    location =/admin{
        deny all;
    }
= 代表精确匹配
```

## 反向代理

> 在 C 端和 S 端增加提供特定功能的服务器，即为代理服务器

### 理解正向代理

最典型的正向代理工具:翻墙工具

- 原理:把不让访问的服务器代理到一个可以访问该网站的代理服务器上
  一般叫做 proxy 服务器 再去转发给客户

### 理解反向代理

- 原理：客户端发送的请求，想要去访问 sever 服务器上的内容，发送的内容被发送到代理
  服务器上，这个代理服务器再把请求发送到自己设置好的内部服务器上，用户真实获得
  的内容就在这些设置好的服务器上。

#### 设置反向代理

```
server{
        listen 80;
        # 监听访问的域名
        server_name nginx2.jspang.com;
        location / {
            #把请求转发到
               proxy_pass http://jspang.com;
        }
}
```

## 虚拟主机

- 原理：一台物理主机划分多个磁盘空间，每个磁盘空间都是一个虚拟主机，每台虚拟主机都可以提供 web 服务，互补干扰。
- 结果：用户可以利用虚拟主机把多个不同域名的网站部署到同一台服务器上。
- 基于端口号配置虚拟主机

## 适配 pc 和移动设备

```
    root /usr/share/nginx/pc;
    if ($http_user_agent ~* '(Android|webOS|iPhone|iPod|BlackBerry)') {
    root /usr/share/nginx/mobile;
    }
    index index.html;
```

\$http_user_agent 的使用：可获取到请求客户端的 userAgent

## gzip 压缩的设置

经过 gzip 压缩之后，页面大小会变成原来的 30%甚至更小,需要浏览器和服务器的同时支持

- 简单配置:

```
    gzip  on; # 开启压缩
    gzip_types text/plain application/javascript text/css;
```

## node 安装

- 安装:yum install nodejs
- 更新:npm install -g n

## 使用域名设置虚拟主机

## 关闭缓存(开发环境)

```
location ~* \.(js|css|png|jpg|gif)$ {
		add_header Cache-Control no-store;
		}
```
