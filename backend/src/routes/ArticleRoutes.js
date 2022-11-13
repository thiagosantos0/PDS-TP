const router = require("express").Router();
const { articleController } = require("../controllers");

router.post("/create-article", articleController.create);
router.get("/get-article", articleController.getArticle);
router.get("/get-all-article", articleController.getAllArticles);
router.get("/get-articles-by-user", articleController.getArticleByUser);
router.put("/update-article", articleController.updateArticle);
router.delete("/delete-article", articleController.autodeleteArticle);

module.exports.article = router;