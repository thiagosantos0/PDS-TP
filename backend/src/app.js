const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const sequelize = require('./db/models')

// const db = require('./db/mysql')

//Rotas

app.use(cors());

var getArticlesRouter = require("./routes/getArticles");
app.use("/getarticles", getArticlesRouter);

const usersRouter = require('./controllers/user-controller');
app.use('/usuarios', usersRouter);

app.get('/', async (req, res) => {
  const users = await sequelize.models.User.findAll()
  res.status(200).json(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})