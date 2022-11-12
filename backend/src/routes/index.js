const { auth } = require("./AuthRoutes");
const { article } = require("./ArticleRoutes");
const { user } = require("./UserRoutes");

module.exports = {
   auth,
   article,
   user
};