const User = require('../../models/User.model')

class RemoveAWishlistItem {
  static async execute(req) {
    try {
      const { id: user } = req.user
      const { ad } = req.query

      const validation = await User.findOne({ wishlist: ad })
      if (!validation) {
        throw new Error('Invalid ID')
      }

      await User.findOneAndUpdate(
        { _id: user },
        { $pullAll: { wishlist: [ad] } },
        { new: true }
      )
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = RemoveAWishlistItem
