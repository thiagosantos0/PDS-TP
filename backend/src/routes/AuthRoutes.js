const router = require("express").Router();
const { authController } = require("../controllers");

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/is-logged-in", authController.isLoggedIn, authController.getAuthStatus);
router.get("/logout", authController.isLoggedIn, authController.logout)

module.exports.auth = router;
