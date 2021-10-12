const chatAsync = require('../../models/ChatAsync.model')

class GetMessageRouter {
  static async execute(req) {
    try {
      const { id: reciver } = req.params
      const { id:sender } = req.user

      if(reciver === sender){
        throw new Error('Reciver and Sender have the same ID')
      }

      const result = await chatAsync.find({
        $or: [
          { userID1: sender, userID2: reciver },
          { userID1: reciver, userID2: sender }
        ]
      })
      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = GetMessageRouter
