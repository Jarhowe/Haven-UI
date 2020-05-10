const path = require('path');
module.exports = {
    base: '/Haven-UI/',
    // 标题
    title: 'Haven UI',
    // 描述
    description: '基于Vue打造UI组件库文档',
    // 注入到当前页面的HTML <head> 标签
    head: [
        ['link', {rel: 'icon', href: '/logo.png'}]
    ],
    // 端口
    port: 8080,
    //主题配置
    themeConfig: {
        // logo
        logo: '/logo.png',
        // search
        search: false,
        // 顶部导航栏
        nav: [
            { text: '首页', link: '/' },
            { text: '组件', link: 'views/guide/install.html'},
            { text: '作者Github', link: 'https://github.com/Jarhowe'}
        ],
        // 这里使用的是多个侧边栏设置
        sidebar: [
            {
                title: '开发指南',
                collapsable: true,
                children: [
                    'views/guide/install.md'
                ]
            },
            {
                title: '基本组件',
                collapsable: false,
                children: [
                    '/views/components/basic/button',
                    '/views/components/basic/layout'
                ]
            }
        ]
    },
    sass: {
        indentedSyntax: true
    }
}