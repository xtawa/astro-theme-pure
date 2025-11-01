// format-image.cjs (使用 CommonJS 语法)
const { matterMarkdownAdapter } = require('@elog/cli')

const format = async (doc, imageClient) => {
    const cover = doc.properties.cover
    if (imageClient) {
        const url = await imageClient.uploadImageFromUrl(cover, doc)
        doc.properties.cover = url
    }
    doc.body = matterMarkdownAdapter(doc);
    return doc;
};

module.exports = {
    format,
};