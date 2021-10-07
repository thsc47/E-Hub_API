const User = require('../../models/User.model')
class DeleteAUser {
  static async execute(req) {
    try {
      const { id } = req.user
      await User.findByIdAndDelete({ _id: id })
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = DeleteAUser
