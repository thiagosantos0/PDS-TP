const router = require("express").Router();
const { articleController } = require("../controllers");

router.get("/create-article", articleController.create);
router.post("/get-article", articleController.getArticle);
router.patch("/get-all-article", articleController.getAllArticles);
router.delete("/get-articles-by-user", articleController.getArticleByUser);
router.patch("/update-article", articleController.updateArticle);
router.delete("/delete-article", articleController.autodeleteArticle);

module.exports.article = router;