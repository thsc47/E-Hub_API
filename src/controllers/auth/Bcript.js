const bcript = require("bcryptjs");

class Bcript {
  static async comparePassword(input, bdPassword) {
    const validation = bcript.compareSync(input, bdPassword);
    return validation;
  }
  static async createHash(password) {
    const passwordHash = bcript.hashSync(password, 12);
    return passwordHash;
  }
}

module.exports = Bcript;
