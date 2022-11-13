const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

const basename = path.basename(__filename);

const db = {};

const sequelize = new Sequelize(
        'compArtigos', 
        'root', 
        'root', {
        host: 'db',
        dialect: 'mysql'
    });

// fs.readdirSync(__dirname)
//   .filter((file) => {
//     return (
//       file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
//     );
//   })
//   .forEach((file) => {

const articleModel = require("./ArticleModel.js")(
  sequelize,
  Sequelize.DataTypes
);
db[articleModel.name] = articleModel;

const userModel = require("./UserModel.js")(
  sequelize,
  Sequelize.DataTypes
);
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