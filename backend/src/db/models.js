const path = require('path');
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: `${path.dirname(path.basename(__dirname))}/database.sql`
});

class Article extends Model {};
class User extends Model {};

Article.init({
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
    ID_Author: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
        sequelize,
        modelName: 'Article'
});

User.init({
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
        sequelize,
        modelName: 'User',
        timestamps: false
});

User.hasMany(Article, {
    foreign_key: 'ID_Author'
})

module.exports = sequelize;