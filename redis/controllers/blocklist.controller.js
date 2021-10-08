const blocklist = require('../config/blocklist')

class Blocklist {
  static addToken(token) {
    blocklist.set(token, '')
  }
  static hasToken(token) {}
}

module.exports = Blocklist
