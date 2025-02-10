const sidebar = require("./utils/getSidebarData")

module.exports = {
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    head: [
        // 添加百度统计
        // [
        //     "script",
        //     {},
        //     `var _hmt = _hmt || [];
        //     (function() {
        //     var hm = document.createElement("script");
        //     hm.src = "https://hm.baidu.com/hm.js?6371333d39195dbe958ef14c0a722ac4";
        //     var s = document.getElementsByTagName("script")[0]; 
        //     s.parentNode.insertBefore(hm, s);
        //     })();`
        // ],
        ['link', { rel: 'icon', href: '/img/newlogo.ico' }],
        ['meta', { name: 'referrer', content: 'no-referrer' }]
    ],
    title: 'myrle的知识空间',
    base: '/',
    description: '立志不再懒懒散散的小前端的知识库',
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        // repo: 'Ostask/daodao-knowledge', // Github仓库地址
        docsDir: 'docs', // .md文件放在了docs目录下
        editLinks: true, // 启用编辑链接
        editLinkText: '编辑',
        logo: '/img/home.jpg',
        sidebarDepth: 2,
        // footer: "MIT Licensed | Copyright © 2021-present 刀刀",   
        nav: [
            { text: '主页', link: '/' },
            {
                text: '前端学习',
                items: [
                    {
                        text: '基础',
                        items: [
                            { text: 'canvas', link: '/pages/d4575e/' },
                            { text: '算法&常用方法', link: '/pages/12e2d5/' },
                            { text: 'TypeScript', link: '/pages/450a09/' },
                            { text: 'css', link: '/pages/331c3b/' },
                            { text: '现代JavaScript库开发', link: '/pages/a5dbfb/' }
                        ]
                    },
                    {
                        text: '框架学习',
                        items: [
                            // {text:'vue',link:'/vue/lesson1'},
                            { text: 'react', link: '/pages/8ea889/' },
                            { text: 'vuepress', link: '/pages/d8e026/' },
                            { text: 'qiankun微前端', link: '/pages/347ae3/' },
                            { text: 'vue3', link: '/pages/2657cd/' }
                        ]
                    },
                    {
                        text: 'webgl学习',
                        items: [
                            { text: 'threejs', link: '/pages/7fb7ad/' }
                        ]
                    }
                ]
            },
            { text: '零零碎碎', link: '/pages/9fae8c/' },
            { text: '随记', link: '/pages/9d1205/' },
            {
                text: '索引',
                items: [
                    { text: '归档', link: '/archives/' },
                ]
            },
            // { text: '关于我', link: '/daodao/' }
        ],
        sidebar: sidebar
    }
}