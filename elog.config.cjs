// elog.config.cjs (使用 CommonJS 语法和正确结构)
const path = require('path');

module.exports = {
    // ------------------------------------
    // 1. 写作平台配置 (WRITE)
    // ------------------------------------
    write: {
        platform: 'notion', 
        notion: {
            token: process.env.NOTION_TOKEN,
            databaseId: process.env.NOTION_DATABASE_ID,
            filter: { property: 'status', select: { equals: '已发布' }}
        }
    },

    // ------------------------------------
    // 2. 部署配置 (DEPLOY) - 补全 local 字段
    // ------------------------------------
    deploy: {
        platform: 'local',
        local: {
            outputDir: './src/content/blog',
            filename: 'title',
            format: 'markdown',
            catalog: false, // 是否在导出的 markdown 文件中添加目录
            
            // 补全 Front Matter 配置
            frontMatter: {
                enable: true,
                include: ['categories', 'tags', 'title', 'publishDate', 'updated', 'permalink', 'cover', 'language', 'description'],
                timeFormat: true,
            },

            // 注意：引用 CommonJS 文件（现在是 .cjs 文件）
            formatExt: './format-image.cjs', 
        }
    },

    // ------------------------------------
    // 3. 图片配置 (IMAGE) - 补全 github 字段
    // ------------------------------------
    image: {
        enable: true,
        platform: 'github',
        github: {
            // 补全 GitHub 仓库信息
        token: process.env.pic_TOKEN,
        user: 'xtawa',
        repo: 'picx-images-hosting'
        }
    },
};