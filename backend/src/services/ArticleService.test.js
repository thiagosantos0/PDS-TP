const ArticleService = require("./ArticleService");

test('create', async () => {
    const artigo = {
        userId: 1,
        title: "eu",
        description: "eu mesmo",
        content: "apenas eu",
        image: "www.google.com"
    }
    await ArticleService.createArticle(artigo)
    const article = await ArticleService.getArticle(5);
    expect(article.article.dataValues.title).toBe("eu");
});

test('update', async () => {
    const changes = {
        title: "você",
        description: "você mesmo"
    }
    const article = await ArticleService.updateArticle(changes, 5);
    expect(article.updatedResponse.dataValues.title).toBe("você");
    expect(article.updatedResponse.dataValues.description).toBe("você mesmo");
});

test('delete', async () => {
    const response = await ArticleService.autodeleteArticle(5);
    expect(response.message).toBe("Article deleted with success");
});