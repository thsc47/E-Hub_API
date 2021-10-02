const User = require("../models/User.model");
const Bcript = require("../controllers/auth/Bcript")
const jwt = require("jsonwebtoken");

class LogInController {
  static async handle(username, password) {
    if (!username || !password) {
      throw new Error("Missing fields");
    }
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error("Wrong username or password");
    }
    const validation = await Bcript.comparePassword(password, user.password)
    console.log(validation)
    if (!validation) {
      throw new Error("Wrong username or password");
    }
    const payload = {
      id: user._id,
      username: user.username,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return ({ user: payload, token });
  }
}

module.exports = LogInController;
