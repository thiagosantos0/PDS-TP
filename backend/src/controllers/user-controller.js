const sequelize = require("../db/models")
const router = require('express').Router();

router.post('/cadastro', async (req, res) => {
    console.log(req.body)
    const usuario = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    await sequelize.models.User.create(usuario)
    res.status(200).end()
})

module.exports = router