const router = require("express").Router();
const { userController, authController } = require("../controllers");


router.post("/create-user", userController.createUser);
router.get("/get-user/:id", authController.isLoggedIn, userController.getUser);
router.get("/get-all-user", authController.isLoggedIn, userController.getAllUsers);
router.put("/update-user/:id", authController.isLoggedIn, userController.updateUser);
router.delete("/delete-user/:id", authController.isLoggedIn, userController.autodeleteUser);

module.exports.user = router;