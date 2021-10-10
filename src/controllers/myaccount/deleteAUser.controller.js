const User = require('../../models/User.model')
const Logout = require('../access/logout.controller')
class DeleteAUser {
  static async execute(req) {
    try {
      const { id } = req.user
      await User.findByIdAndDelete({ _id: id })
      await Logout.execute(req)
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = DeleteAUser
