const dbPool = require("../config/database");

const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM users";

  return dbPool.execute(SQLQuery);
};

const getUserDetail = (idUser) => {
  const SQLQuery = `SELECT * FROM users WHERE id='${idUser}'`;

  return dbPool.execute(SQLQuery);
};

const createNewUser = (body) => {
  const SQLQuery = `INSERT INTO users (name, email, age, gender) VALUES ('${body.name}', '${body.email}', '${body.age}', '${body.gender}')`;

  return dbPool.execute(SQLQuery);
};

const updateUser = (idUser, body) => {
  const SQLQuery = `UPDATE users
                      SET name='${body.name}', email='${body.email}', age='${body.age}', gender='${body.gender}'
                        WHERE id=${idUser}`;

  return dbPool.execute(SQLQuery);
};

const deleteUser = (idUser) => {
  const SQLQuery = `DELETE FROM users WHERE id='${idUser}'`;

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllUsers,
  getUserDetail,
  createNewUser,
  updateUser,
  deleteUser,
};
