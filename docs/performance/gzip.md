# 性能优化配置 gzip 

gzip压缩在性能优化中是一项重要的策略，结合前端预压缩和服务端在线压缩可以充分发挥优势。配置nginx时，可以考虑以下方案：

1. 前端预压缩：使用构建工具（如Webpack、Gulp等）在前端生成.gz文件。
    - 优点：
        - 前期耗时，但减少了服务器压力。
        - 加载时不需要服务器实时压缩，提高了前端资源加载速度。
    - 缺点：
        - 打包后体积变大，占用更多存储空间。
        - 前期构建时间会增加。
2. 服务端在线压缩（nginx配置）：在nginx配置中启用gzip模块进行在线压缩。
    - 优点：
        - 不需要预先生成.gz文件，即时压缩，无需占用额外存储空间。
    - 缺点：
        - 实时压缩会消耗服务器性能。
        - 压缩过程可能导致轻微延迟，影响部分性能。

### 结合配置建议：

- 配置nginx：在nginx上进行配置，结合两种方式的优势。
- 条件判断：使用nginx配置判断请求是否存在对应的.gz文件，如果存在，直接返回该静态资源；如果不存在，才进行在线压缩。
- 动静分离：将动态资源和静态资源分开，对于静态资源，尽量利用已经预先压缩好的.gz文件；对于动态资源，根据需要实时压缩。

示例nginx配置：

```
http {
    gzip on;
    gzip_comp_level 5;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    server {
        listen       80;
        server_name  example.com;

        location / {
            root   /var/www/html;
            index  index.html index.htm;

            # 检查是否存在对应.gz文件，如果存在直接返回
            if (-f $request_filename.gz) {
                add_header Content-Encoding gzip;
                rewrite (.*) $1.gz break;
            }

            # 不存在.gz文件，进行在线压缩
            try_files $uri @missing;
        }

        location @missing {
            gzip_static off;
            gzip on;
            ...
            # 其他压缩相关配置
            ...
        }
    }
}
```

这种结合方式可以充分利用已有的.gz文件，同时对于不存在预压缩文件的请求，实时进行在线压缩，达到压缩资源和减少服务器压力的双重优势。
