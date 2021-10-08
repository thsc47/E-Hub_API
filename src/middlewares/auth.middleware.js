const Jwt = require('../controllers/auth/JWT')
const jwt = require('jsonwebtoken')
const Blocklist = require('../../redis/controllers/blocklist.controller')

async function validToken(token) {
  if (await Blocklist.hasToken(token)) {
    throw new jwt.JsonWebTokenError('Invalid Token')
  }
}

const Auth = async (req, res, next) => {
  const auth = req.get('Authorization')
  if (!auth) {
    throw new Error('Lack of token')
  }
  const [, token] = auth.split(' ')
  try {
    await validToken(token)
    const decodedToken = await Jwt.ValidToken(token)
    req.user = { ...decodedToken, token: token }
    next()
  } catch (error) {
    throw new Error('Invalid token')
  }
}

module.exports = Auth
