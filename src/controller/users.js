const UserModel = require("../models/users");

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UserModel.getAllUsers();

    res.status(200).json({
      statusCode: 200,
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
    res.status(200).json({
      statusCode: 200,
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

    res.status(201).json({
      statusCode: 201,
      message: "CREATE new user success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
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
    res.status(200).json({
      statusCode: 200,
      message: "UPDATE user success",
      data: {
        id: idUser,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Server error",
      serverMessage: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { idUser } = req.params;

  try {
    await UserModel.deleteUser(idUser);
    res.status(200).json({
      statusCode: 201,
      message: "DELETE user success",
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
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
