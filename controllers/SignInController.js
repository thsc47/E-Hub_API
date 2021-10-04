const User = require("../models/User.model");
const Bcript = require("../controllers/auth/Bcript");

class SignInController {
  static async handle(req) {
    const {
      username,
      password,
      email,
      name,
      age,
      cpf,
      street,
      number,
      district,
      city,
      zipcode,
    } = req;
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
        email,
        name,
        age,
        cpf,
        street,
        number,
        district,
        city,
        zipcode,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = SignInController;
