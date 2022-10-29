const { DataTypes, Model } = require('sequelize');
const db = require('../db/MySql.js');

class ArticleModel extends Model {};

ArticleModel.init({
    id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_author: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
        db,
        modelName: 'Article'
});


module.exports = ArticleModel;