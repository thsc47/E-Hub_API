const User = require("../models/User.model");
const Bcript = require("../controllers/auth/Bcript");
const Jwt = require("../controllers/auth/JWT");

class LogInController {
  static async handle(username, password) {
    if (!username || !password) {
      throw new Error("Missing fields");
    }
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error("Wrong username or password");
    }
    const validation = await Bcript.comparePassword(password, user.password);
    if (!validation) {
      throw new Error("Wrong username or password");
    }
    const payload = {
      id: user._id,
      username: user.username,
    };
    const token = await Jwt.sign(payload);
    return { user: payload, token };
  }
}

module.exports = LogInController;
