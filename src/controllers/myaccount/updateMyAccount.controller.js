const User = require('../../models/User.model')
class UpdateMyAccount {
  static async execute(req) {
    try {
      const { id: user } = req.user
      console.log(`user: ${user}`)
      const result = await User.findByIdAndUpdate({ _id: user }, req.body, {
        new: true,
      })
      console.log(result)
      return result
    } catch (error) {}
    console.error(error.message)
    throw new Error(error)
  }
}

module.exports = UpdateMyAccount
