const ArticleService = require( "../services/ArticleService.js");
const Article = require('../../dominio/models/Article.js');


class ArticleController {


    create ( req, res ) {
        let article = new Article(null, req.title, req.description, req.content, req.image, req.id_author);

        ArticleService.create(article).then(data => {
            res.status(200).send(article);
        })
        .catch(err =>{
            res.status(500).send({
                message : "Err while creating article"
            });
        });
    }
}


module.exports = ArticleController;