const { Article } = require("../models");

module.exports = {
    getById: (id) => Article.findByPk(id),
    getAll: () => Article.findAll(),
    getOneByField: (params) => Article.findOne({ where: params }),
    getAllByField: (params) => Article.findAll({ where: params }),
    createNewInstance: (params) => Article.create(params),
    updateInstance: (article, articleDetails) => article.update(articleDetails),
    deleteInstanceById: (id) => Article.destroy({ where: { id } })
};