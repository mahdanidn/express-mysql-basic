const dbPool = require("../config/database");

const getAllUsers = () => {};

const getAllPostByIdUser = (idUser) => {
  const SQLQuery = `SELECT * FROM posts WHERE iduser='${idUser}'`;

  return dbPool.execute(SQLQuery);
};

const getPostByIdPost = (idPost) => {
  const SQLQuery = `SELECT * FROM posts WHERE id='${idPost}'`;

  return dbPool.execute(SQLQuery);
};

const createNewPost = (body) => {
  const SQLQuery = `INSERT INTO posts (title, content, iduser) VALUES ('${body.title}', '${body.content}', '${body.iduser}')`;

  return dbPool.execute(SQLQuery);
};

const updatePost = (idPost, body) => {
  const SQLQuery = `UPDATE posts
                      SET title='${body.title}', content='${body.content}'
                        WHERE id=${idPost}`;

  return dbPool.execute(SQLQuery);
};

const deletePost = (idPost) => {
  const SQLQuery = `DELETE FROM posts WHERE id='${idPost}'`;

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllUsers,
  getAllPostByIdUser,
  getPostByIdPost,
  createNewPost,
  updatePost,
  deletePost,
};
