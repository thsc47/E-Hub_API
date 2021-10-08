const Blocklist = require('../../../redis/controllers/blocklist.controller')
class Logout {
  static async execute(req) {
    try {
      const { token } = req.user
      await Blocklist.addToken(token)
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = Logout
