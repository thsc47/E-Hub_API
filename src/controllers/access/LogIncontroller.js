const User = require('../../models/User.model')
const Bcript = require('../auth/Bcript')
const Jwt = require('../auth/JWT')

class LogInController {
  static async handle(email, password) {
    if (!email || !password) {
      throw new Error('Missing fields')
    }
    const user = await User.findOne({ email })
    if (!user) {
      throw new Error('Wrong email or password')
    }
    const validation = await Bcript.comparePassword(password, user.password)
    if (!validation) {
      throw new Error('Wrong email or password')
    }
    const payload = {
      id: user._id,
      email: user.email,
    }
    const token = await Jwt.sign(payload)
    return { user: payload, token }
  }
}

module.exports = LogInController
