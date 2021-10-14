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
          { sender, reciver },
          { sender: reciver, reciver: sender }
        ]
      })
        
      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = GetMessageRouter
