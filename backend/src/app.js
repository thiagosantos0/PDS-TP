const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');

// const db = require('./db/mysql')

//Rotas

app.use(cors());

var getArticlesRouter = require("./routes/getArticles");

app.use("/getarticles", getArticlesRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})