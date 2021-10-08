const blocklist = require('../config/blocklist')
const JWT = require('../../src/controllers/auth/JWT')
const { promisify } = require('util')
const { createHash } = require('crypto')

const existsAsync = promisify(blocklist.exists).bind(blocklist)
const setAsync = promisify(blocklist.set).bind(blocklist)

function createTokenHash(token) {
  return createHash('sha256').update(token).digest('hex')
}

class Blocklist {
  static async addToken(token) {
    try {
      const tokenHash = createTokenHash(token)
      await setAsync(tokenHash, '')
      blocklist.expireat(tokenHash, (await JWT.DecodedToken(token)).exp)
    } catch (error) {
      throw new Error(error)
    }
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
