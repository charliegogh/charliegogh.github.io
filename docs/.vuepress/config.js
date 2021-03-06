const utils = require("./utils");
module.exports = {
  title: " ",  // 网站标题
  description: ' ',     // 网站描述
  head: [
    ['link', { rel: 'icon', href: './favicon.ico' }]
  ],
  themeConfig: { // 主题配置
    nav: [
      { text: "最近阅读", link: "/diary/" },
      { text: "vue", link: "/vue/api" },
      { text: "js", link: "/js/useful" },
      { text: "业务应用", link: "/business/article" },
      { text: "网站", link: "/website/" },
      { text: "工具", link: "/tools/git" },
      { text: "库", link: "/repository/" }
    ],
    sidebar: utils.inferSiderbars(),
    lastUpdated: '上次更新',
    // editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    sidebarDepth: 3   // slider 深度
  },
};
