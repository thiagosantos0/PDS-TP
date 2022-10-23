const path = require('path');
const express = require('express');

const app = express();
const backdirname = path.dirname(__dirname);
var getArticlesRouter = express.Router();

const sequelize = require(`${backdirname}/db/models`);

app.use(express.static(backdirname))
getArticlesRouter.get("", async function(req, res, next) {
    let articles = await sequelize.models.Article.findAll();
    let response = {
        articles: []
    };

    res.send(articles);
});

module.exports = getArticlesRouter;
