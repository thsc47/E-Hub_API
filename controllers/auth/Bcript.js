const bcript = require("bcryptjs");

class Bcript {
  static async comparePassword(input, bdPassword) {
    const validation = bcript.compareSync(input, bdPassword);
    return validation;
  }
}

module.exports = Bcript