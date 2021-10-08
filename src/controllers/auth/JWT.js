const jwt = require("jsonwebtoken");

class Jwt {
  static async sign(payload) {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });
    return token;
  }
  static async ValidToken(token) {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    return decodedToken;
  }
}

module.exports = Jwt;
