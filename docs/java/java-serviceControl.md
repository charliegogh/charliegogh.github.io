#  Java 服务远程重启控制台

主要用于简单的停止启动线上java服务，正式环境手机可以访问。

**工作原理：**

crontab 定时任务每分钟调用安装的shell，shell脚本中查询数据库是否需要停止、启动的服务，有则执行配置的shell脚本

## 1. 安装命令

**正式环境**（Linux 服务器上，以 root 身份执行）：

```bash
wget https://picx.cnki.net/xms/java_project.sh && sh java_project.sh
```

**测试环境：**

* 20 服务器已安装测试版本。

---

## 2. 页面添加项目
列表最下方，添加项目
![image](https://ix.cnki.net/psmc/common/showPicture?fileCode=e49b5b05-3e63-4a65-b678-65c73157fd62.png)

* **正式地址：** [https://x.cnki.net/web/xms-java-project](https://x.cnki.net/web/xms-java-project)
* **测试地址：** [https://xtest.cnki.net/web/xms-java-project](https://xtest.cnki.net/web/xms-java-project)   

---

## 3. 账号密码

* 与 **xms** 平台账号密码一致。
* 如无账号，请联系 **都珍艳** 开通。

## 4. 注意事项

1. 有一些服务器，重启脚本不好使，需要分开执行stop和start
2. 同一个服务只能同时执行一个命令，多个命令需要在上个命令成功之后再操作   
3. 点击 脚本执行日志 几个字，可以立刻刷新日志列表获取最新信息   
4. 新建项目表单中 进程名称 填，ps -ef | grep 可以查到的唯一名字   
5. 有一些服务器，start.sh失败的话，可能是因为cron的环境变量比终端少，环境变量java找不到（即使手动执行start脚本可行），启动服务的shell中的java命令需要改为绝对路径，比如：
 ```bash
    /opt/jdk1.8.0_351/bin/java
 ``` 
6. 有一些服务器，shell有时不会使用bash执行，需要用bash执行的脚本最上方最好写上 #!/bin/bash

## 5. 目前已安装的服务器和测试过的项目

[【金山文档 | WPS云文档】 重启项目测试结果](https://365.kdocs.cn/l/cikrfPMC1gT4)

