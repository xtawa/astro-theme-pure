---
categories:
  - 博客折腾手册
  - 教程
tags:
  - 建站
  - 博客
publishDate: '2025-07-19'
urlname: indexnowcli
description: 手动提交Indexnow的教程
title: Indexnow Python提交脚本
---

## Indexnow Python提交脚本


## 前言


因为网站迟迟不被必应收录，了解到有个叫IndexNow的东西可以把最新网站一键提交给必应，在网上搜寻后找不到有关Astro框架提交的信息，进而转换思路，发现知乎上有一篇确实可用的教程，但因脚本排版原因失效。我修复了脚本并在此处给出完整教程。


[知乎的相关文章](https://zhuanlan.zhihu.com/p/709111640)


## Step1 获取API


确保你的网站已通过Bing Webmaster Tool校验。


在左侧"IndexNow"栏，选择Getstarted，获取到API密钥的txt文本，不要着急关闭网页


将txt文本拷贝到你的网站root/public目录。


publish网站。


## Step2 获取 Site URL


访问 http(s)://your-website.com/sitemap-0.xml，


从Line4开始准备好所有的url


## Step3 脚本编写


新建一个`indexnow.py`文件，内附如下内容：


```bash
import requests

import json

url = "<https://www.bing.com/indexnow>"

payload = {

    "host": "<https://website.com>",

    "key": "key-string",

    "keyLocation": "<https://website.com/your-api-string.txt>",

    "urlList": [

        "<https://your-website.com/>", ##若要提交多个网页，在除最后一个网页的最后加上英文逗号

        "<https://your-website.com/>" ##填写step2中的网站url

    ]

}
headers = {

    'Content-Type': 'application/json'
}

response = requests.post(url, data=json.dumps(payload), headers=headers)

print(response.status_code)
print(response.text)
```


## Step4 安装依赖项


在命令行输入


```bash
pip install requests
```

> [!IMPORTANT]
>
> 确保你配置好了全局的Python和PIP
>
>

随后执行`indexnow.py`，若命令行返回200，即为提交成功。


-

