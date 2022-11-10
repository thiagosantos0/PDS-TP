const { ArticleModel } = require("../models");

module.exports = {
    getById: (id) => ArticleModel.findByPk(id),
    getOneByField: (params) => ArticleModel.findOne({ where: params }),
    createNewInstance: (params) => ArticleModel.create(params),
    updateInstance: (article, articleDetails) => article.update(articleDetails),
    deleteInstanceById: (id) => ArticleModel.destroy({ where: { id } })
};