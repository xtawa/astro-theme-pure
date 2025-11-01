---
categories:
  - 教程
tags:
  - 建站
  - 博客
  - 主题
  - Fuwari
publishDate: '2025-07-17'
urlname: bingbanner
description: 为Fuwari主题Banner设置每日Bing壁纸的教程
title: 为Fuwari主题Banner设置每日Bing壁纸
---

# 为Fuwari主题Banner设置每日Bing壁纸


### 以上服务由 [Bing每日壁纸档案库](https://bing.img.run/api.html) 提供


仅作本人操作备份


### 为Fuwari主题Banner设置每日Bing壁纸


1.打开 `src/config.ts` 修改如下内容


### Formerly


```bash
banner: {
		enable: false,
		src: "",
		position: "center",
		credit: {
			enable: false,
			text: "",
			url: "",
```


### After


```bash
banner: {
		enable: true,
		src: "<https://bing.img.run/1920x1080.php>",
		position: "center",
		credit: {
			enable: true,
			text: "Bing Daily Wallpaper",
			url: "<https://www.bing.com>",
```


注：credit处内容可保持不变，若设置内容不涉及版权保护的情况下。
src处可为以下链接：


Bing今日壁纸（长期提供服务，地球不停转，我们不停服）


```plain text
<https://bing.img.run/uhd.php> UHD超高清原图
```


```plain text
<https://bing.img.run/1920x1080.php> 1080P高清
```


```plain text
<https://bing.img.run/1366x768.php> 普清
```


```plain text
<https://bing.img.run/m.php> 手机版1080P高清
```


随机获取Bing历史壁纸


```plain text
<https://bing.img.run/rand_uhd.php> UHD超高清原图
```


```plain text
<https://bing.img.run/rand.php> 1080P高清
```


```plain text
<https://bing.img.run/rand_1366x768.php> 普清
```


```plain text
<https://bing.img.run/rand_m.php> 手机版1080P高清
```

