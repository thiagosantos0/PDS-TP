const UserModel = require("./UserModel");

module.exports = (sequelize, DataTypes) => {
    const ArticleModel = sequelize.define(
        "Article",
        {
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "user_id",
                references: {
                    model: 'user',
                    key: "id"
                }
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
            }
        },
        {
            tableName: "article"
        }
    );

    return ArticleModel;
};