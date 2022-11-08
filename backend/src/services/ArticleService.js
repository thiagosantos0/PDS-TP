const db = require('../db/MySql.js');


class ArticleService {

    create (article) {
        return db.models.Article.create({
            title: article.title,
            description: article.description,
            content: article.content,
            image: article.image,
            ID_Author: article.id_author,
            updatedAt: article.updatedAt
        });
    }

    get () {
        return db.models.Article.findAll();
    }

    get (id) {
        return db.models.Article.findOne({
            where: { 
                id: id 
            } 
        });
    }

    update (id, article) {
        return db.models.Article.update({
            title: article.title,
            description: article.description,
            content: article.content,
            image: article.image,
            ID_Author: article.id_author,
            updatedAt: article.updatedAt
        }, {
            where: { _id: id } 
        });
    }
    
    delete (id) {
        return db.models.Article.destroy({
            where: { 
                id: id 
            } 
        });
    }
}

module.exports = ArticleService;