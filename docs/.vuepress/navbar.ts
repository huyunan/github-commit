/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '记录', link: '/blog/' },
  // { text: '标签', link: '/blog/tags/' },
  {
    text: '工作内容',
    items: [
      { text: '宜企拍', link: '/notes/yqp/README.md' }
    ]
  },
  { text: '归档', link: '/blog/archives/' },
  {
    text: '更多',
    items: [
      { text: '友情链接', link: '/friends/' },
      { text: '博客封面截图', link: '/blogcover/' },
      { text: '问题', link: '/notes/issues/README.md' }
    ]
  },
])

