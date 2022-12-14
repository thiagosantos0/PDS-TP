const Sequelize = require("sequelize");

const db = {};

const sequelize = new Sequelize("compArtigos", "root", "root", {
  // host: 'db',
  // dialect: 'mysql'
  dialect: "sqlite",
  storage: "./database.sql",
});

const articleModel = require("./ArticleModel.js")(
  sequelize,
  Sequelize.DataTypes
);
db[articleModel.name] = articleModel;

const userModel = require("./UserModel.js")(sequelize, Sequelize.DataTypes);
db[userModel.name] = userModel;

sequelize.sync();

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
