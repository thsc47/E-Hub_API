const Jwt = require("../controllers/auth/JWT");

const Auth = async (req, res, next) => {
  const auth = req.get("Authorization");
  if (!auth) {
    throw new Error("Lack of token");
  }
  const [, token] = auth.split(" ");
  try {
    const decodedToken = await Jwt.ValidToken(token);
    req.user = { ...decodedToken };
    next();
  } catch (error) {
    throw new Error("Invalid token");
  }
};

module.exports = Auth;
