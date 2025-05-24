// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  // css: ['~/assets/css/main.css'], // 如果你打算创建全局 CSS 文件
  modules: [], // 稍后可以根据需要添加 Tailwind CSS 等模块
  app: {
    head: {
      title: '文件禅 - 一键告别文件杂乱',
      htmlAttrs: {
        lang: 'zh-CN' // 设置页面语言为简体中文
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { key: 'description', name: 'description', content: '文件禅 (FileNeatAI 风格) - 智能文件整理与重命名工具，帮助您一键告别文件杂乱。' },
        { name: 'keywords', content: '文件整理, AI文件管理,智能重命名, Nuxt.js, 静态网站' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } // 你需要在 public 目录下放置一个 favicon.ico 文件
      ],
      script: [ // 添加 Google Analytics
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-W00RFW012B'
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W00RFW012B');
          `
        }
      ]
    }
  }
  // 如果你的所有内容都在首页，并且通过 Vercel 部署静态站点，
  // Nuxt 3 的默认配置 (nitro preset: 'vercel') 已经很适合了。
  // 如果需要纯静态输出 (例如用于其他不支持Node.js环境的平台):
  // ssr: false, // 或者 true，然后通过 nuxi generate 生成
  // nitro: {
  //   prerender: {
  //     routes: ['/'] // 预渲染首页
  //   }
  // }
})
