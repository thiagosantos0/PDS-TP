const path = require('path');
const express = require('express');

const app = express();
const backdirname = path.dirname(__dirname);
var ArticlesRouter = express.Router();

const sequelize = require(`${backdirname}/db/models`);

app.use(express.static(backdirname))
ArticlesRouter.get("", async function(req, res, next) {
    let articles = await sequelize.models.Article.findAll();
    let response = {
        articles: []
    };

    res.send(articles);
});

ArticlesRouter.get('/artigos/:id', async (req, res) => {
    const artigos = await sequelize.models.Article.findAll({
        where: {ID_Author: req.params.id}
    })
    res.status(200).json(artigos);   
})

module.exports = ArticlesRouter;
