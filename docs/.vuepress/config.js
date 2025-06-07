const utils = require("./utils");
module.exports = {
  base:'/web/docs/',
  title: "知网研学",  // 网站标题
  description: ' ',     // 网站描述
  head: [
    ['script', {}, `
       var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?4c899f131fd50b606fea334985b2335b";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
        `]
  ],
  themeConfig: {
    nav: [
      { text: '前端构建', link: '/build-tools/' },
      { text: '应用部署', link: '/deployment/' },
      {
        text: '开发资源',
        items: [
          { text: '工具库', link: '/sdk/' },
          { text: '组件库', link: '/components/' },
        ]
      },
      {
        text: '规范文档',
        items: [
          { text: '代码规范', link: '/linting/' },
          { text: '设计规范', link: '/ui/' },
        ]
      },
      {
        text: '运维支持',
        items: [
          { text: '性能优化', link: '/performance/' },
          { text: '数据统计', link: '/statistics/' }
        ]
      },
      { text: '开放平台', link: '/openx/' }
    ],
    sidebar: utils.inferSiderbars(),
    lastUpdated: '上次更新',
    // editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    sidebarDepth: 3   // slider 深度
  },
};
