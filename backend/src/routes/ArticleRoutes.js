const router = require("express").Router();
const { articleController } = require("../controllers");

router.post("/create-article", articleController.create);
router.get("/get-article/:id", articleController.getArticle);
router.get("/get-all-article", articleController.getAllArticles);
router.get("/get-articles-by-user/:id", articleController.getArticleByUser);
router.put("/update-article/:id", articleController.updateArticle);
router.delete("/delete-article/:id", articleController.autodeleteArticle);

module.exports.article = router;