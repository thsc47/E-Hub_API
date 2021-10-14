const User = require('../../models/User.model')

class AddToWishlist {
  static async execute(req) {
    try {
      const { ad } = req.query
      const { id: user } = req.user
      const addedWishlist = await User.updateOne(
        { _id: user },
        { $push: { wishlist: ad } },
        { new: true }
      )
    } catch (error) {
      console.error(error.message)
    }
  }
}

module.exports = AddToWishlist
