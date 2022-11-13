const { User } = require("../models");

module.exports = {
    getById: (id) => User.findByPk(id),
    getOneByField: (params) => User.findOne({ where: params }),
    createNewInstance: (params) => User.create(params),
    updateInstance: (user, userDetails) => user.update(userDetails),
    deleteInstanceById: (id) => User.destroy({ where: { id } })
};