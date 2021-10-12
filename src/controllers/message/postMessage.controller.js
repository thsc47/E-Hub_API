const chatAsync = require('../../models/ChatAsync.model')

class PostMessageRouter {
  static async execute(req) {
    try {
      const { id: userID1 } = req.user
      const { userID2, AdvertisementID, message } = req.body
      const payload = {
        userID1,
        userID2,
        sender: userID1,
        AdvertisementID,
        message
      }
      const result = await chatAsync.create(payload)
      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = PostMessageRouter
