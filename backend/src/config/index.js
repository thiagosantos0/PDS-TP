const express = require("express");
const app = express();
const routes = require("../routes");

app.set("port", 3000);
app.use(express.json());

app.get("/", (req, res) => {
   return res.status(200).json("server is running");
});

Object.keys(routes).forEach((key) => app.use(`/api/${key}`, routes[key]));

module.exports = app;