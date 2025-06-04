const utils = require("./utils");
module.exports = {
  base:'/web/tools/',
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
      { text: "组件应用", link: "/components/" },
      { text: "工具", link: "/tools/x-sdk.html" },
      { text: "业务应用", link: "/business/" },
      { text: "docker", link: "/docker/" },
    ],
    sidebar: utils.inferSiderbars(),
    lastUpdated: '上次更新',
    // editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    sidebarDepth: 3   // slider 深度
  },
};
