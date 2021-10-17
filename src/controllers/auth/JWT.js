const jwt = require('jsonwebtoken')

class Jwt {
  static async sign(payload) {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '1day',
    })
    return token
  }
  static async ValidToken(token) {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
    return decodedToken
  }

  static async DecodedToken(token) {
    const expTime = await jwt.decode(token, process.env.JWT_SECRET)
    return expTime
  }
}

module.exports = Jwt
