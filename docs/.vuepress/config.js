const utils = require("./utils");
module.exports = {
  title: "charlie",  // 网站标题
  description: 'charlie',     // 网站描述
  head: [
    ['link', { rel: 'icon', href: './favicon.ico' }],
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
  themeConfig: { // 主题配置
    nav: [
      { text: "最近阅读", link: "/diary/" },
      { text: "vue", link: "/vue/api" },
      { text: "js", link: "/js/useful" },
      { text: "业务应用", link: "/business/article" },
      { text: "网站", link: "/website/" },
      { text: "工具", link: "/tools/git" },
      { text: "库", link: "/repository/" },
      { text: "开发规范", link: "/standard/" }
    ],
    sidebar: utils.inferSiderbars(),
    lastUpdated: '上次更新',
    // editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    sidebarDepth: 3   // slider 深度
  },
};
