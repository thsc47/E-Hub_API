const chatAsync = require('../../models/ChatAsync.model')

class GetMessageRouter {
  static async execute(req) {
    try {
      const { params } = req
      const { id } = req.user

      const result = await chatAsync.find({
        $or: [
          { userID1: id, userID2: params.id },
          { userID1: params.id, userID2: id }
        ]
      })
      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = GetMessageRouter
