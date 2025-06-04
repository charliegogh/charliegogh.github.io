#  前端 docker 镜像部署

## 多环境

``` dockerfile
# 设置默认值
ARG ENVIRONMENT=prd

# 指定环境基于哪个镜像
FROM node:16.13.0 AS builder

# 设置工作目录
WORKDIR /x-cli

COPY . .

RUN npm install --registry=https://registry.npmmirror.com

RUN if [ "$ENVIRONMENT" = "prd" ]; then \
        npm run build; \
    else \
        npm run build:xtest; \
    fi


FROM nginx:latest

# 设置工作目录
WORKDIR /usr/share/nginx/html
COPY --from=builder /x-cli/dist ./

RUN if [ "$ENVIRONMENT" = "prd" ]; then rm -rf ./* && cp -r x-cli/dist/* ./; \
    elif [ "$ENVIRONMENT" = "xtest" ]; then rm -rf ./* && cp -r x-cli/xtest/* ./; \
    elif [ "$ENVIRONMENT" = "dev" ]; then rm -rf ./* && cp -r x-cli/dev/* ./; \
    fi

EXPOSE 80

```

###  构建 Docker 镜像

- 测试环境
```dockerfile
docker build --build-arg ENVIRONMENT=xtest -t x-cli .
```

- 正式环境
```dockerfile
docker build --build-arg ENVIRONMENT=production -t x-cli .
```


## 单环境

```dockerfile
# 指定环境基于哪个镜像
FROM node:16.13.0 AS builder

# 设置工作目录
WORKDIR /app

# 复制工程文件
COPY . .

RUN npm install --registry=https://registry.npmmirror.com

# 执行打包
RUN npm run build


FROM nginx:latest

COPY --from=builder app/dist usr/share/nginx/html

# nginx 暴漏端口
EXPOSE 80
```

### 构建 docker 镜像

```dockerfile
docker build -t cli .
```

## 运行 docker 镜像

```dockerfile
docker run -p 5000:80 --name x-cli -d x-cli
```
