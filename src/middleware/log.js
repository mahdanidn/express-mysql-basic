const logRequest = (req, res, next) => {
  console.log("request path", req.path);
  next();
};

module.exports = logRequest;
