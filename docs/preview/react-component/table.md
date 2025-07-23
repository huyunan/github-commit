---
title: react-component/table
tags:
  - react
  - component
  - table
createTime: 2025/07/23 11:51:42
permalink: /article/3nyq1jh2/
---

## 概述
add: The table stripe display can be set. 

### Pull requests
[react-component/table/pull/1290](https://github.com/react-component/table/pull/1290)

## 详细描述

本次更新为表格组件引入了条纹行（斑马线）功能。通过新增 stripe 属性，用户可以启用奇数行高亮显示。相关样式、属性声明、逻辑处理以及文档和示例均已同步更新，无其他控制流或导出接口变更。

#### Changes
|  文件/分组                   |   变更简述     |
| :-------------              | :------------- |
| assets/index.less	          | 新增 .rc-table-row-striped 样式规则，实现条纹行背景色。 |
| docs/demo/stripe.md	        | 新增文档，介绍条纹表格用法并嵌入示例代码。 |
| docs/examples/stripe.tsx    | 新增 React 条纹表格示例组件，演示 stripe 属性的使用。 |
| src/Body/index.tsx          | BodyProps 新增 stripe 属性，渲染逻辑支持条纹行样式。 |
| src/Table.tsx	TableProps    | 新增可选 stripe 属性，并向下传递给 Body。 |

<CustomComponent />
