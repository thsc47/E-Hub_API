const User = require("../models/User.model");
const bcript = require("bcryptjs");

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

      const passwordHash = bcript.hashSync(password, 12);
      await User.create({
        username,
        password: passwordHash,
      });
    } catch (error) {
        throw new Error(error);
    }
  }
}

module.exports = SignInController;
