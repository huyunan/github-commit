---
title: Visual Studio Code
tags:
  - microsoft
  - vscode
createTime: 2025/08/07 08:56:33
permalink: /article/q0owqz8l/
---

## 概述

257970:fix: The drag range of the debugToolBar has been changed to be applic….

### Pull requests

[microsoft/vscode/pull/257970](https://github.com/microsoft/vscode/pull/257970)

## 详细描述

257970: debugToolBar的拖动范围非常有限，而且很不舒服。例如，当搜索内容时，很难将其移开，因为它无法完成。所以我改变了它，这样它也可以在VSCode窗口中拖动。设置限制不会弹出窗口。已经完成了窗口的初始加载、关闭和窗口大小更改的处理。测试已经进行了，没有发现任何问题。仅在Windows环境中进行了测试。

<CustomComponent />
