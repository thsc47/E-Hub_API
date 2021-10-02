const User = require("../models/User.model");
const Bcript = require("../controllers/auth/Bcript")

class SignInController {
  static async handle(username, password) {
    try {
      if (!username || !password) {
        throw new Error("Missing fields");
      }

      const user = await User.findOne({ username });
      if (user) {
        throw new Error("User already exists");
      }
      await User.create({
        username,
        password: await Bcript.createHash(password),
      });
    } catch (error) {
        throw new Error(error);
    }
  }
}

module.exports = SignInController;
