const PostModel = require("../models/posts");

const createNewPost = async (req, res) => {
  const { body } = req;
  try {
    await PostModel.createNewPost(body);

    res.status(200).json({
      message: "CREATE new post success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const getAllPostByIdUser = async (req, res) => {
  const { idUser } = req.params;

  try {
    const [data] = await PostModel.getAllPostByIdUser(idUser);
    res.status(200).json({
      message: "GET all posts success",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

const getDetailPostByIdPost = async (req, res) => {
  const { idPost } = req.params;

  try {
    const [data] = await PostModel.getPostByIdPost(idPost);
    res.status(200).json({
      message: "GET posts detail success",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

const updatePost = async (req, res) => {
  const { idPost } = req.params;
  const { body } = req;
  try {
    await PostModel.updatePost(idPost, body);
    res.status(200).json({
      message: "UPDATE post success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

const deletePost = async (req, res) => {
  const { idPost } = req.params;

  try {
    await PostModel.deletePost(idPost);
    res.status(200).json({
      message: "DELETE post success",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

module.exports = {
  createNewPost,
  getAllPostByIdUser,
  getDetailPostByIdPost,
  updatePost,
  deletePost,
};
