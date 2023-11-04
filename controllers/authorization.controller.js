const jwt = require("jsonwebtoken");
const _Error = require("../utils/_error");

module.exports.authorize = (req, res, next) => {
  let { auth } = req.cookies;

  const { auth_header } = req.headers;

  if (!auth && !auth_header)
    return next(new _Error("You are not logged in", 401));

  if (auth_header && !auth) auth = auth_header;

  const decoded = jwt.verify(auth, process.env.JWT_SECRET);

  if (!decoded) return next(new _Error("Please re-login", 401));

  req.user = decoded;

  next();
};

module.exports.restrictTo =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role))
      return next(
        new _Error("You are not authorized to perform this action", 403)
      );

    next();
  };
