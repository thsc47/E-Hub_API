const chatAsync = require('../../models/ChatAsync.model')

class PostMessageRouter {
  static async execute(req) {
    try {
      const { id: sender } = req.user
      const { reciver, AdvertisementID, message } = req.body
      const payload = {
        sender,
        reciver,
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
