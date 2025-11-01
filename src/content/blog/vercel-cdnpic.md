---
categories:
  - 教程
tags:
  - 建站
  - 工具
  - 图床
  - PicX
publishDate: '2025-07-14'
urlname: vercel-cdnpic
description: 使用Vercel+PicX加速Github图床
title: 使用Vercel+PicX加速Github图床
---

# 使用Vercel+PicX加速Github图床


众所周知，Github的访问速度在国内一直都是跌宕起伏，


而本博客原来使用的图床 Telegraph-Image(由 Cloudflare Pages驱动)也有众多缺点。


最重要的是，Cloudflare CDN在大陆中国移动的访问全部超时，导致移动用户无法看到图片资源。


在网上了解之后，发现Vercel的服务在绑定自定义域名之后在国内访问速度非常可以，


因此 在这篇文章中，我将会记录下完整部署过程，也充作本人操作备份。

> [!IMPORTANT]
>
> 使用Vercel加速，每月有100GB流量限制，大流量博客请勿使用。
>
>
> 你需要准备
>
>
> 1.一个Github账号
>
>
> 2.一个Vercel账号
>
>
> 3.域名
>
>

## 1.部署PicX图床


### 打开[Github PicX项目 README](https://github.com/XPoet/picx)文件，按照要求部署图床。


你会发现一个Github存储库已创建。


### 打开[PicX](https://picx.xpoet.cn/),进行授权操作


随后你可以进行图片上传操作。


## 2.修改图床存储库


打开你的Github picx-images-hosting 存储库


在 根目录 新建 index.html 文件，便于Vercel识别为静态网站。


这是我的 index.html 文件，显示为一个时钟。


```bash
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>实时时钟</title>
<style>
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
  }
  #clock {
    font-size: 48px; /* 增大字体大小 */
    font-weight: bold;
    color: #333;
  }
</style>
<script>
function updateTime() {
    var now = new Date(); // 获取当前时间
    var hours = now.getHours(); // 小时
    var minutes = now.getMinutes(); // 分钟
    var seconds = now.getSeconds(); // 秒数
    var formattedTime = hours + ':' +
                        (minutes < 10 ? '0' : '') + minutes + ':' +
                        (seconds < 10 ? '0' : '') + seconds;
    document.getElementById('clock').textContent = formattedTime;
}
setInterval(updateTime, 1000); // 每1000毫秒（1秒）更新时间
</script>
</head>
<body onload="updateTime()">
<div id="clock"></div> <!-- 时间显示的位置 -->
</body>
</html>
```


## 3.Vercel 导入存储库


### 3.1 打开Vercel，登录你的账号，进行Github授权操作。


### 3.2 在 Overview 界面，


点击右上角"add new"-“Project”


### 在Import Git Repository中导入picx-images-hosting 存储库


其他设置不变。


因为Vercel的自带Domain在国内被GFW阻断，我们需要自定义域名


随后，点击 Project 的Domain选项，


### 设置自定义域名。


## 4.配置PicX加速


打开PicX。


### 打开 图床设置-图片链接规则配置，新建一个规则。


`图片链接类型` 自填


`图片链接规则`填写`自定义域名`\图片在存储库的位置。


如我的图片全部放在存储库的根目录，那么配置就这么填写：


![image.6f0yy4ke85.png](https://raw.githubusercontent.com/xtawa/picx-images-hosting/master/7b82727b32041806987eb23eef38ee1e.png)


## 5.测试


上传图片，打开链接测试。


## 附


### 使用了Vercel的网站在国内的访问性


![%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE-2025-07-14-111531.4xutwdnikd.jpg](https://raw.githubusercontent.com/xtawa/picx-images-hosting/master/4fdaff975a9182465e1be3ee5cad3097.jpg)


## Cloudflare的访问性


![%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE-2025-07-14-111923.8s3lfc8l7t.webp](https://raw.githubusercontent.com/xtawa/picx-images-hosting/master/8ec7c777916fd9ac318483929ee53f45.webp)


移动全军覆没，


因此，选择Vercel比Cloudflare更明智。


### 2025/07/19更新：


给vercel套上优选ip访问效果更加显著：


![image.4n80atnsps.webp](https://raw.githubusercontent.com/xtawa/picx-images-hosting/master/cd3603f6cb585499b50b46b0103c3669.webp)

