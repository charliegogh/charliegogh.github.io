# git

## .gitignore:配置文件

```
.DS_Store   
node_modules/
/dist/    打包编译产生的文件夹   没必要去上传github
npm-debug.log*
yarn-debug.log*
yarn-error.log*
# Editor directories and files
.idea    
.vscode 
*.suo
*.ntvs*
*.njsproj
*.sln
```

## 创建本地仓库

```
git init
git add *
git commit -m "init gshop"
```

## 创建远程仓库

```javascript
 // 复制创建之后的命令
git remote add origin https://github.com/charliegogh/gshop.git
```

## 将本地仓库推送到远程仓库

!! 更改windows中之前保存的git账户的问题
修改用户名:git config --global user.name "charliegogh"   
修改邮箱:git config --global user.email "charliegogh@163.com"   
密码会自动重新登录:  
git config --global credential.helper store 
或者在windows账户中的windows凭据中修改git账户的密码  

## 推送到远程仓库

 git push origin master



## 一些git操作命令
- 查看当前分枝
```
    git branch -vv
```
- 拉取分枝
```
    git pull    
```

## 



## 