const jwt = require("jsonwebtoken");
const bcript = require("bcryptjs");

const Auth = (req, res, next) => {
  const auth = req.get("Authorization");
  if (!auth) {
    res.status(401).json({unauthorized: "Lack of token"})
  }
  const [, token] = auth.split(" ");
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { ...token };
    next();
  } catch (error) {
    res.status(401).json({unauthorized: "Invalid token"})
  }
};

module.exports = Auth;
