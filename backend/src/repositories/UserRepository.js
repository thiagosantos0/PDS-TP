const { UserModel } = require("../models");

module.exports = {
    getById: (id) => UserModel.findByPk(id),
    getOneByField: (params) => UserModel.findOne({ where: params }),
    createNewInstance: (params) => UserModel.create(params),
    updateInstance: (user, userDetails) => user.update(userDetails),
    deleteInstanceById: (id) => UserModel.destroy({ where: { id } })
};