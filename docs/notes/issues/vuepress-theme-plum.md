---
title: vuepress-theme-plum
createTime: 2025/08/16 11:05:34
permalink: /issues/s5xzl3og/
---

## 概述

1. 写多个 .md 文件后并删除 createTime 和 permalink 重新 npm run dev 后
   .md 文件内容丢失。
   暂时解决方法：node_modules\vuepress-theme-plume\lib\node\index.js
   这里写死了是博客改为 blogText: "记录",
2. /blog/ 的博客改为记录后，面包屑名称还是博客，查看编译后文件是博客。

<del>3. backToTop 换成向下前头，从新加一个属性。(已添加)</del>

4. profile 这个属性有加 false选项。
