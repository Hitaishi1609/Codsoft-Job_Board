const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.isAuthenticated = async (req, res, next) => {
  const {token} = req.cookies;

  if (!token) return res.status(401).json({ message: "Not Logged In" });

  const decoded = jwt.verify(token, "secret");

  req.user = await User.findById(decoded._id);

  next();
};