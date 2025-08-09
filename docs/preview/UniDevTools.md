---
title: UniDevTools
tags:
  - VConsole
  - uni-app
  - vue
createTime: 2025/08/02 14:45:25
permalink: /article/8trydne4/
---

## 概述

是 uni-app 端的调试工具，兼容小程序，app，web端等

8:fix: 弹出调试弹窗后，点击气泡也会关闭弹窗
10:devCache 优化
16:mpDevBubble 组件的拖拽 vue3 时不好使，修改兼容 vue2
22:app端拖动时会不小心拖动到状态栏里，然后就不能动了。

### Pull requests

[/reborn-net/UniDevTools/pull/8](https://github.com/reborn-net/UniDevTools/pull/8)

[/reborn-net/UniDevTools/pull/10](https://github.com/reborn-net/UniDevTools/pull/10)

[/reborn-net/UniDevTools/pull/16](https://github.com/reborn-net/UniDevTools/pull/16)

[/reborn-net/UniDevTools/pull/22](https://github.com/reborn-net/UniDevTools/pull/22)

## 详细描述

110:有两个 license 文件，导致编译出错，删除一个。

111:调试 vue 项目时，在 debug 时在调试控制台按下 backspace 删除要输出的变量名，会删除编辑器中的代码。
追加既存的 Backspace 快捷键显示条件。

<CustomComponent />
