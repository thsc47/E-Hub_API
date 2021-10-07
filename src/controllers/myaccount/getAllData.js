const User = require('../../models/User.model')
class getAllData {
  static async execute(req) {
    try {
      const { id } = req.user
      const result = await User.find({ _id: id })
      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}
module.exports = getAllData
