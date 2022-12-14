const express = require("express");
const app = express();
const routes = require("../routes");
const bodyParser = require('body-parser')
const cors = require('cors');
const cookieParser = require('cookie-parser');

app.set("port", 3000);
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({origin: 'http://localhost:5173', credentials: true}));
app.use(cookieParser());

app.get("/", (req, res) => {
   return res.status(200).json("server is running");
});

Object.keys(routes).forEach((key) => app.use(`/api/${key}`, routes[key]));

module.exports = app;