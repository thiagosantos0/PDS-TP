const { DataTypes, Model } = require('sequelize');
const db = require('../db/MySql.js');

const ArticleModel = require('./ArticleModel.js');


class UserModel extends Model {};

UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }},
    {
        db,
        modelName: 'User',
        timestamps: false
});

UserModel.hasMany(ArticleModel, {
    foreign_key: 'ID_Author'
})



module.exports = UserModel;