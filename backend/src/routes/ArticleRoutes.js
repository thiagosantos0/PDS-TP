const router = require("express").Router();
const { articleController, authController } = require("../controllers");

router.post("/create-article", authController.isLoggedIn, articleController.create);
router.get("/get-article/:id", articleController.getArticle);
router.get("/get-all-article", articleController.getAllArticles);
router.get("/get-articles-by-user/:id", authController.isLoggedIn, articleController.getArticleByUser);
router.put("/update-article/:id", authController.isLoggedIn, articleController.updateArticle);
router.delete("/delete-article/:id", authController.isLoggedIn, articleController.autodeleteArticle);

module.exports.article = router;