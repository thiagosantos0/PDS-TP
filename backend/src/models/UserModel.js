module.exports = (sequelize, DataTypes) => {
    const UserModel = sequelize.define(
        "User",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: "users"
        }
    );
 
    return UserModel;
 };