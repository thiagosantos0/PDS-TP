const router = require("express").Router();
const { authController } = require("../controllers");

router.get("/signup", authController.signup);
router.post("/login", authController.login);

module.exports.article = router;