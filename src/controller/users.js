const UserModel = require("../models/users");

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UserModel.getAllUsers();

    res.json({
      message: "Get All users success",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const getUserDetail = async (req, res) => {
  const { idUser } = req.params;

  try {
    const [data] = await UserModel.getUserDetail(idUser);
    res.json({
      message: "GET user detail success",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

const createNewUser = async (req, res) => {
  const { body } = req;

  try {
    await UserModel.createNewUser(body);

    res.json({
      message: "CREATE new user success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updateUser = async (req, res) => {
  const { idUser } = req.params;
  const { body } = req;
  try {
    await UserModel.updateUser(idUser, body);
    res.json({
      message: "UPDATE user success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { idUser } = req.params;

  try {
    await UserModel.deleteUser(idUser);
    res.json({
      message: "DELETE user success",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllUsers,
  getUserDetail,
  createNewUser,
  updateUser,
  deleteUser,
};
