const User = require('../../models/User.model')
class UpdateMyAccount {
  static async execute(req) {
    try {
      const { id: user } = req.user
      const result = await User.findByIdAndUpdate({ _id: user }, req.body, {
        new: true,
      })
      return result
    } catch (error) {}
    throw new Error(error)
  }
}

module.exports = UpdateMyAccount
