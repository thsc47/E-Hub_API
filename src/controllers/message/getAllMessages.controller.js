const chatAsync = require('../../models/ChatAsync.model')

class GetAllMessageRouter {
  static async execute(req) {
    try {
      const { id: sender } = req.user
      const result = await chatAsync.find({
        $or: [{ sender }, { reciver: sender }]
      })
      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = GetAllMessageRouter
