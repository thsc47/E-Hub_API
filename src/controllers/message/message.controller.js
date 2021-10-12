class MessageRouter {
  static async execute(req) {
    try {
      console.log('oi')
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = MessageRouter
