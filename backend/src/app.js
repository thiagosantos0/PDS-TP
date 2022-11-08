const express = require('express')

const bodyParser = require('body-parser')
const cors = require('cors');

const app = express()
const port = 3000

const db = require('./db/MySql.js')

//Rotas

app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());



var articlesRouter = require("./adaptadores/controllers/ArticleController");
app.use("/artigos", articlesRouter);

const usersRouter = require('./adaptadores/controllers/UserController');
app.use('/usuarios', usersRouter);

app.get('/', async (req, res) => {
  const users = await db.models.User.findAll()
  res.status(200).json(users)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})