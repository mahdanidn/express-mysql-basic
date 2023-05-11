const dbPool = require("../config/database");

const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM userss";

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllUsers,
};
