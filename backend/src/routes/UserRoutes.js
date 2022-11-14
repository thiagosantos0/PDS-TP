const router = require("express").Router();
const { userController, authController } = require("../controllers");

router.post("/create-user", userController.createUser);
router.get("/get-user/:id", userController.getUser);
router.get("/get-all-user", userController.getAllUsers);
router.put("/update-user/:id", userController.updateUser);
router.delete("/delete-user/:id", userController.autodeleteUser);

module.exports.user = router;
