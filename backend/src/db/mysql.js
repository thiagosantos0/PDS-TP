const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('compArtigos', 'root', 'root', {
    host: 'db',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log("db connected")
}).catch((error) => {
    console.log("db not connected. error: " + error)
})

module.exports = sequelize;