
const router = require("express").Router();

const userControllers = require("../controllers/user");

router.post("/insert-user", userControllers.createUser);

router.get("/users", userControllers.getAllUsers);

router.get("/users/:id", userControllers.getUserById);

router.patch("/update-user/:id", userControllers.updateUser);

router.delete("/delete-user/:id", userControllers.deleteUser);

module.exports = {
    router
}