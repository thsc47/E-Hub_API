const blocklist = require('../config/blocklist')
const { promisify } = require('util')
const { createHash } = require('crypto')

const existsAsync = promisify(blocklist.exists).bind(blocklist)
const setAsync = promisify(blocklist.set).bind(blocklist)
const JWT = require('../../src/controllers/auth/JWT')

function createTokenHash(token) {
  return createHash('sha256').update(token).digest('hex')
}

class Blocklist {
  static async addToken(token) {
    const tokenHash = createTokenHash(token)
    await setAsync(tokenHash, '')
    blocklist.expireat(tokenHash, JWT.DecodedToken(token).exp)
  }
  static async hasToken(token) {
    try {
      const tokenHash = createTokenHash(token)
      const result = await existsAsync(tokenHash)
      return result === 1 ? true : false
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = Blocklist
