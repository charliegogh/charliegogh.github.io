
### 国产化模版规范

- [打包分析](#preview)
- [多环境变量](#env)
- [权限认证](#permission)
- [proxy 跨域](#proxy)
- 浏览器兼容前缀
- [less 添加全局变量](#less)
- 删除 moment 语言包
- 添加别名
- 配置 externals 动态引入 cdn 资源
- 利用 splitChunks 单独打包第三方模块
- 开启 gzip 压缩
- 生产 console 去除
- eslint
- [git 提交代码检测](#git)
- axios 使用
- store 使用
- [router 使用](#router)
- 全局 filters
- 权限认证
- core 按需加载项
- js-cookie 使用
- mixins 使用
- flex 全局使用
- 组件库样式定制
- jsonp

### <span id="preview">打包分析</span>

npm run preview

### <span id="env">配置多环境变量</span>

- 通过在 package.json 里的 scripts 配置项中添加--mode xxx 来选择不同环境
- 在项目根目录中新建.env, .env.production, .env.test 等文件
- 只有以 VUE_APP 开头的变量会被 webpack.DefinePlugin 静态嵌入到客户端侧的包中，代码中可以通过 process.env.VUE_APP_BASE_API 访问
- vue.config.js 读取的环境变量名称可以任意自定义
- NODE_ENV 和 BASE_URL 是两个特殊变量，在代码中始终可用

### <span id="permission">权限认证</span>

- 一层认证 LID/AID ，二层认证 jwtToken；一层认证过期退出登录，二层认证根据后台错误码进行免登
- 根据环境变量中 VUE_APP_LID 动态加载 proxy，打包环境下 getBaseUrl 方法动态替换 proxy 中的 target

### <span id="proxy">proxy 跨域</span>

```
 '/api': {
    open: false,
    ws: false,
    target: 'https://x.x.x/',
    changeOrigin: true, //
    pathRewrite: { '^/x': '' },
    headers: {
      referer: 'https://x.x.x/',
      origin: 'https://x.x.x/'
    }
  },
```

- pathRewrite 代理重写：会对项目中所有携带 x 的请求进行替换。
- 突破 referer 验证：一些接口会对 refer 做校验，可在 headers 添加配置。

### <span id="less">less 添加全局变量</span>

可以在项目中的任何地方使用 styles/mixin 下的 less 变量，环境会自动打包处理。

```
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/styles/mixin.less')]
    }
  },
```

### <span id="git">git 提交代码检测</span>

- eslintignore 忽略配置

[link](https://juejin.cn/post/7007603848080523278)

### <span id="router">router</span>

- router 自动配置路由表
