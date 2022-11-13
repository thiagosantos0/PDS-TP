const router = require("express").Router();
const { userController } = require("../controllers");


router.post("/create-user", userController.createUser);
router.get("/get-user", userController.getUser);
router.post("/get-all-user", userController.getAllUsers);
router.patch("/update-user", userController.updateUser);
router.delete("/delete-user", userController.autodeleteUser);

module.exports.user = router;