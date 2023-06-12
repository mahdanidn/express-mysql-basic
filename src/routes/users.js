const express = require("express");

const UserController = require("../controller/users.js");

const router = express.Router();

// CREATE DATA USER
router.post("/", UserController.createNewUser);

// GET DATA USERS
router.get("/", UserController.getAllUsers);

// GET DATA USERS DETAIL
router.get("/:idUser", UserController.getUserDetail);

// UPDATE - PATCH
router.patch("/:idUser", UserController.updateUser);

// DELETE
router.delete("/:idUser", UserController.deleteUser);

module.exports = router;
