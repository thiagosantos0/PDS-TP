const { Sequelize } = require('sequelize');

const db = new Sequelize('compArtigos', 'root', 'root', {
    host: 'db',
    dialect: 'mysql'
});

db.authenticate().then(() => {
    console.log("db connected")
}).catch((error) => {
    console.log("db not connected. error: " + error)
})

module.exports = db;