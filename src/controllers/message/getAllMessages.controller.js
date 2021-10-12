const chatAsync = require('../../models/ChatAsync.model')

class GetAllMessageRouter {
  static async execute(req) {
    try {
      const { id } = req.user
      const result = await chatAsync.find({
        $or: [
          { userID1: id},
          {userID2: id }
        ]
      })
      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = GetAllMessageRouter
