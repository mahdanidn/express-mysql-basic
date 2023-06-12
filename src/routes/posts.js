const express = require("express");

const PostController = require("../controller/posts.js");

const routerPost = express.Router();

// CREATE DATA POST
routerPost.post("/", PostController.createNewPost);

// // GET DATA ALL POST BY ID USER
routerPost.get("/:idUser", PostController.getAllPostByIdUser);

// // GET DATA DETAIL POST BY ID POST
routerPost.get("/detail/:idPost", PostController.getDetailPostByIdPost);

// // UPDATE - PATCH
routerPost.patch("/:idPost", PostController.updatePost);

// // DELETE
routerPost.delete("/:idPost", PostController.deletePost);

module.exports = routerPost;
